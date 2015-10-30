for numero in 1..100
	result = ""
	numero_string=numero.to_s
	result << "Fizz" if numero%3 == 0
	result << "Buzz" if numero%5 == 0
	result << "Bang" if numero_string[0] == "1"
	puts numero if result.empty? == true
	puts result if result.empty? == false
end