file = File.new("dummy.txt", "w")

print "Enter content for file:"
content = gets.chomp

file.syswrite("This is the beginning of file\n")
file.syswrite(content + "\n")
file.puts "this is end of file"

file.close()

# use do for writing to file
    