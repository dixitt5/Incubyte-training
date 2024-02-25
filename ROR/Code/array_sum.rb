def array_sum(arr)
    sum = 0
    arr.each do |elem|
        sum += elem
    end
    return sum
end

arr = [10, 20, 30]
puts "Sum of elements of array #{arr} = #{array_sum(arr)}"