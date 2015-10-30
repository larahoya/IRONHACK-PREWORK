puts "Write a sentence:"
sentence = gets.chomp

sentence.gsub! /[[:punct:]]/, " "
words = sentence.split(" ").sort_by!{|word| word.downcase}

words.each {|word| print "#{word} "}