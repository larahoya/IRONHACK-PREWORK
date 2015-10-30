class Player
	
	attr_accessor :name, :word, :letter

	def initialize (name)
		@name = name
		@word
		@letter
	end

	def set_word(word)
		if word.length >= 5 && word.length <= 12
			@word = word.upcase
		else
			puts "Incorrect word"
		end
	end 

	def set_letter(letter)
		if letter.match(/[a-zA-Z]/) && letter.length == 1
			@letter = letter.upcase
		else
			puts "Please introduce one letter"
		end
	end

end

class AIPlayer < Player

	attr_accessor :name, :word, :letter

	def initialize (name, dictionary)
		@name = name
		@word = dictionary.random_word.upcase
	end

end

class Dictionary

	attr_accessor :random_word

	def initialize
		@random_word = set_random_word
	end

	def set_random_word
		words = []
		File.open('picturable.txt') do |x|
			x.each do |line| 
			words << line
			end
		end
		return words[rand(words.length)]
	end
end

class Game

	attr_accessor :playerone, :playertwo, :game_word, :incomplete_word, :chances
	
	def initialize (playerone, playertwo, game_word=playerone.word.split(""), incomplete_word=[],chances=6)
		@playerone = playerone
		@playertwo = playertwo
		@game_word = game_word
		@incomplete_word = incomplete_word
		@chances = chances
		puts "LETS PLAY"
	end

	def start_game
		for n in 0...@game_word.length
			@incomplete_word[n] = "_"
		end
		@incomplete_word.each do |x| print " " + x end
		puts "	(#{@chances} chances left)"
	end

	def check_letter
		if @chances > 0 && @game_word != @incomplete_word
			for n in 0...@game_word.length
				if @game_word[n] == @playertwo.letter
					@incomplete_word[n] = @playertwo.letter
				end
			end
			@chances -= 1
			@incomplete_word.each do |x| print " " + x end
			puts "	(#{@chances} chances left)"
			puts "FINISHED GAME" if @chances == 0 || @game_word == @incomplete_word
		else
			puts "FINISHED GAME"
		end
	end
end

class Saved < Game

	attr_accessor

	def initialize (game)
		@game = game
		@playerone = game.playerone
		@playertwo = game.playertwo
		@game_word = game.game_word
		@incomplete_word = game.incomplete_word
		@chances = game.chances
		puts "GAME SAVED"
	end

	def loaded
		puts "GAME LOADED"
		@game = Game.new(@playerone, @playertwo, @game_word, @incomplete_word, @chances)
	end

end


#Game with two players
lara=Player.new("Lara")
alex=Player.new("Alex")

lara.set_word("coche")
alex.set_letter("c")

my_game=Game.new(lara,alex)
my_game.start_game
my_game.check_letter
alex.set_letter("o")
my_game.check_letter

#Game with a random word
my_dictionary=Dictionary.new

mac=AIPlayer.new("mac", my_dictionary)

my_second_game=Game.new(mac,alex)
my_second_game.start_game
alex.set_letter("a")
my_second_game.check_letter
alex.set_letter("e")
my_second_game.check_letter
alex.set_letter("i")
my_second_game.check_letter
alex.set_letter("o")
my_second_game.check_letter

my_saved_game=Saved.new(my_second_game)
my_saved_game.loaded

alex.set_letter("s")
my_saved_game.check_letter
alex.set_letter("u")
my_saved_game.check_letter



