def solve_cypher(sentence,z=-3)
	
	letters=sentence.downcase.split("")

	letters.map! do |letter|
		if letter == " "
			print letter
		else
			x = (letter.ord)+z
			if x<97
				x += 26
			elsif x>122
				x-=26
			end
			print x.chr
		end
	end
end

solve_cypher("pb uhdo qdph lv grqdog gxfn")
