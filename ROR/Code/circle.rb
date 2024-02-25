require './shape.rb' 
# loading the entire content of other file

class Circle
    include Shape

    def initialize(radius)
        @radius = radius
    end

    # def area
    #     return 3.14 * @radius * @radius
    # end

    def perimeter
        return 2 * 3.14 * @radius
    end
end

print "Enter circle radius : "
radius = gets.chomp.to_f
circle1 = Circle.new(radius)

perimeter = circle1.perimeter
puts "Perimeter of circle is : " + perimeter.to_s
puts "Area of circle is : #{circle1.area}"