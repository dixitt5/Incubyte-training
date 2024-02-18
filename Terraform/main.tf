terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.36.0"
    }
  }
}

provider "aws" {
  region  = "ap-south-1"
  profile = "default"
}


data "aws_ami" "ubuntu" {
  most_recent = true

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-jammy-22.04-amd64-server-*"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }

  owners = ["099720109477"] # Canonical
}

resource "aws_vpc" "custom" {
  cidr_block = "10.0.0.0/16"
}

resource "aws_subnet" "custom" {
  vpc_id                  = aws_vpc.custom.id
  cidr_block              = "10.0.0.0/24"
  availability_zone       = "ap-south-1a"
  map_public_ip_on_launch = true
  tags = {
    Name = "Main"
  }
}

resource "aws_subnet" "default" {
  vpc_id            = aws_vpc.custom.id
  cidr_block        = "10.0.1.0/24"
  availability_zone = "ap-south-1b"
  tags = {
    Name = "Main"
  }
}

resource "aws_internet_gateway" "gw" {
  vpc_id = aws_vpc.custom.id
}

resource "aws_route_table" "custom_route_table" {
  vpc_id = aws_vpc.custom.id

  route {
    cidr_block = aws_vpc.custom.cidr_block
    gateway_id = "local"
  }

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.gw.id
  }
}

resource "aws_security_group" "allow_ssh" {
  name   = "instance-sg"
  vpc_id = aws_vpc.custom.id

  ingress {
    from_port   = 22
    to_port     = 22
    description = "Allow SSH Trafic"
    protocol    = "TCP"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    from_port   = 443
    to_port     = 443
    description = "Allow HTTPS Trafic"
    protocol    = "TCP"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    from_port   = 80
    to_port     = 80
    description = "Allow HTTP Trafic"
    protocol    = "TCP"
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }
}

resource "aws_instance" "app-server" {
  ami             = data.aws_ami.ubuntu.id
  instance_type   = "t2.micro"
  key_name        = "test3"
  subnet_id       = aws_subnet.custom.id
  security_groups = [aws_security_group.allow_ssh.id]
  ebs_block_device {
    volume_size = "8"
    volume_type = "gp3"
    device_name = "/dev/sda1"
  }
  depends_on = [aws_internet_gateway.gw]
}


resource "aws_db_subnet_group" "custom" {
  name       = "custom"
  subnet_ids = [aws_subnet.custom.id, aws_subnet.default.id]
}


resource "aws_db_instance" "default" {
  allocated_storage      = 20
  db_name                = "admindb"
  storage_type           = "gp2"
  engine                 = "mariadb"
  engine_version         = "10.11.6"
  instance_class         = "db.t3.micro"
  username               = "dixit"
  password               = "foobarbaz"
  parameter_group_name   = "default.mariadb10.11"
  skip_final_snapshot    = true
  db_subnet_group_name   = aws_db_subnet_group.custom.name
  vpc_security_group_ids = [aws_security_group.rds-ec2.id]
}

resource "aws_security_group" "rds-ec2" {
  name   = "rds-ec2-sg"
  vpc_id = aws_vpc.custom.id
  ingress {
    from_port = 3306
    to_port   = 3306
    protocol  = "TCP"

    security_groups = [aws_security_group.allow_ssh.id]
  }
}

resource "aws_ecr_repository" "pokemon_registery" {
  name                 = "pokemon_registery"
  image_tag_mutability = "MUTABLE"
}
resource "aws_ecr_repository" "pokemon_frontend_registery" {
  name                 = "pokemon_frontend_registery"
  image_tag_mutability = "MUTABLE"
}
