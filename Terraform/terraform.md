* IAC

  - infrastructure as code

* Terraform

  - terraform is a tool for building, changing, and versioning infrastructure efficiently
  - it is a tool for IAC
  - written in HCL (HashiCorp Configuration Language), a declarative language
  - HashiCorp Terraform is a powerful tool used for managing infrastructure as code (IaC). In traditional infrastructure management, configuring servers, networks, and other resources is often done manually, which can be time-consuming, error-prone, and difficult to scale. Terraform addresses these challenges by allowing users to define their desired infrastructure in configuration files written in a human-readable language
  - With Terraform, you can describe the infrastructure components you need, such as virtual machines, databases, storage buckets, networking configurations, and more, using a declarative syntax. These configuration files specify the desired state of your infrastructure rather than the steps needed to reach that state. Terraform then takes care of figuring out the necessary actions to create, update, or delete resources to match the desired state.
  - we write an executable script
  - they have binaries that execute our code for setting up infrastructure
  - has support for many cloud providers
  - replicate the infrastructure in different environments (dev, staging, production)
  - eg: replicate env in different regions
  - template/boilerplate code for infrastructure
  - idempotent operations
    - the result of the operation is the same, irrespective of the number of times the operation is executed
    - eg: creating a bucket, if the bucket already exists, it will not create a new bucket, it will just update the existing bucket
  - .tf files

* commands
  - `terraform apply`
    - looks for all the .tf files in the directory to execute and applies the changes
    - --auto-approve to skip the confirmation
    - if we remove some resources from the .tf file, terraform will remove the resources from the cloud
    - atomic - either it creates all the resources or none if some error occurs
  - `terraform plan`
    - works like a dry run
    - works as a diff to show the changes that will be made with current file and the cloud
  - `terraform destroy`
    - destroys the infrastructure
  - `terraform init`
    - initializes the directory with the necessary plugins
    - creates a .terraform directory
    - downloads the binary for the cloud providers
    - once only, or when the .tf files are changed (eg: change version of provider) or new .tf files are added

* state management
  - terraform keeps track of the state of the infrastructure
  - keeps track of resources in the tf and cloud
  - eg: update bucket name in the tf file, terraform will update the bucket name in the cloud in place of creating a new bucket (like git diff)
  - the state file is a json file, which is stored in some global location (say s3)

* provider
  - a plugin that terraform uses to interact with the cloud provider
```
provider "aws" {
  region = "us-east-1"
  profile = "default"
}

```
    - region can be parameterized and passed as argument at runtime
        - profile is the name of the profile in the ~/.aws/credentials file

* resource
- a block of code that defines a resource
- eg: aws_instance, aws_s3_bucket, aws_vpc, aws_subnet
```
resource "aws_instance" "example" {
  ami = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
}
```
- the first argument is the type of the resource
  - registry.terraform.io has the list of all the resources
  - [terraform registry](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/instance)
- the second argument is the name of the resource
  - this is used to refer to the resource in other parts of the code in terraform
  - eg: `resource.aws_instance.example.id` to refer to the id of the instance
  - cannot have two resources with the same name, cannot be variable

* data
- querying a provider to return data
- pass query parameters to the provider (eg: default, filter)
- arguments and attributes
- eg: want the existing vpc id
```
data "aws_vpc" "default" {
  default = true
}
```
- `data.aws_vpc.default.id` to refer to the id of the vpc -> attribute
- argument - default = true -> to get the default vpc

* variable
- usually kept in a separate file
- no need to import the file, terraform automatically imports the .tf files in the directory
- 
- use:
  - `var.variable_name`
- can pass the variable as an argument at runtime
  - `terraform apply -var="region=us-west-1"` 
```
variable "region" {
  description = "The region in which the infrastructure will be created"
  default = "us-east-1"
}
```
- description is the description of the variable
- default is the default value of the variable

* aws cli
- `aws sts get-caller-identity`
  - to get the current account id
- `aws configure list`
  - to list the current configuration
- `aws configure list-profiles`
  - to list the profiles

* awc iac
- cloudFormation
    - IAC tool by AWS
    - uses json or yaml
    - specify the resources and their dependencies
- cdk
    - converts the code to cloudFormation
    - internally uses cloudFormation
- only for aws, terraform is for different cloud providers

# module
main
```
module "ec2" {
    source = "./ec2"
    instance_type = "t2.micro"
}
``` 

output
```
output "instance_id" {
  value = aws_instance.example.id
}
```

input
```
variable "instance_type" {
  description = "The type of the instance"
  default = "t2.micro"
}
```



# depends_on
- to specify the dependencies between resources
- eg: ec2 instance depends on the vpc

main
```
resource "aws_instance" "example" {
  ami = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  depends_on = [aws_vpc.vpc]
}
```

# iam bucket policy
- principal
  - the entity that is allowed or denied access to a resource
  - eg: '*' for all
- action
  - the action that is allowed or denied
  - eg: s3:GetObject, s3:PutObject
- resource
  - the resource that is allowed or denied
  - eg: arn:aws:s3:::my-bucket/*
- effect
  - allow or deny

# iam
- either with policies or roles
- also manage inter service access
- policies
  - json document
  - attached to a user, group, or role
- create and manage users

# serving static website
- bucket policy
- cloudFront (for images, videos, etc)

* CI/CD pipeline
- continuous integration and continuous deployment
- automate the workflows of the software development

# ecr
- elastic container registry
- store docker images

# ingress
- incoming traffic

# egress
- outgoing traffic

# locals
- to define local variables

# rds security group
- any ec2 instance that is a part of the security group can access the rds instance

# terraform craft

* OpenTofu
- open source alternative to Terraform

# hw
- aws role -> download ecr image to ec2 instance -> terraform to add this role to the ec2 instance