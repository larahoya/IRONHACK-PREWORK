
require 'Date'

class Item
	attr_accessor  :price
	def initialize (price)
		@price = price
	end

	def price
		@price
	end
end

class Apples < Item
end

class Oranges < Item
end

class Grapes < Item
end

class Bananas < Item
end

class Watermelons < Item
end



apples=Apples.new(10)
oranges=Oranges.new(5)
grapes=Grapes.new(15)
bananas=Bananas.new(20)
watermelons=Watermelons.new(50)

class Cart
	attr_reader :total_items, :total_price, :apples_count, :watermelons_count
	
	def initialize
		@total_items = []
		@total_price = 0
		@apples_count = 0
		@watermelons_count = 0
	end

	def add_items (item)
		if item.class == Apples
			@apples_count += 1
		elsif item.class == Watermelons
			@watermelons_count += 1 
		end
		@total_items.push(item)
	end

	def calculate_total
		@total_items.each do |item|
			@total_price += item.price
		end
		puts "Your total today is #{@total_price}."
	end

	def discount
		
		if @total_items.length >= 5
			@total_price = @total_price*0.95
		end

		if @total_price >= 100
			@total_price -= 10
		end

		if @apples_count >= 2
			apples=@total_items.find {|item| item.class == Apples}
			@total_price -= (@apples_count/2)*apples.price
			
		end

		if Date.today.sunday? == true
			watermelons=@total_items.find {|item| item.class == Watermelons}
			@total_price -= (@watermelons_count)*0.1*watermelons.price
			
		end

		puts "Your new total is #{@total_price}."

	end
end

my_cart=Cart.new
my_cart.add_items(apples)
my_cart.add_items(apples)
my_cart.add_items(oranges)
my_cart.add_items(grapes)
my_cart.add_items(bananas)
my_cart.add_items(watermelons)

my_cart.calculate_total
my_cart.discount


