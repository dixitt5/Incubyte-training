def display_reverse_name(first_name, last_name)
  puts "Hello #{last_name} #{first_name}"
end

print "Enter your first name: "
first_name = gets.chomp

print "Enter last name: "
last_name = gets.chomp

display_reverse_name(first_name, last_name)