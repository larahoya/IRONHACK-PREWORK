class Ingredient
	attr_reader :name, :price
	def initialize (name,price)
		@name = name
		@price = price
	end
end

class MilkShake
	attr_reader :name, :ingredients, :base_price, :total_price_of_milkshake
	def initialize (name)
		@name = name
		@base_price = 3
		@ingredients = []
	end

	def add_ingredient (ingredient)
		@ingredients.push (ingredient)
	end

	def price_of_milkshake
		@total_price_of_milkshake = @base_price
		@ingredients.each do |ingredient|
			@total_price_of_milkshake += ingredient.price
		end
		@total_price_of_milkshake
	end
end

class ShakeShop

	def initialize (name)
		@name = name
		@list_of_milkshakes = []
	end

	def add_milkshake (milkshake)
		@list_of_milkshakes.push(milkshake)
	end

	def get_milkshakes
		@list_of_milkshakes.each do |milkshake|
			puts "#{milkshake.name}: #{milkshake.total_price_of_milkshake} euros"
		end
	end
end

chocolate_chip=Ingredient.new("Chocolate Chips",2)
banana=Ingredient.new("Banana",1)
cookies=Ingredient.new("Cookies",2)
chocolate_addict=MilkShake.new("Chocolate Addict")
strawberry_dream=MilkShake.new("Strawberry Dream")
chocolate_addict.add_ingredient(banana)
chocolate_addict.add_ingredient(chocolate_chip)
strawberry_dream.add_ingredient(cookies)
joshs_shake_shop=ShakeShop.new("Josh's Shake Shak")
joshs_shake_shop.add_milkshake(chocolate_addict)
joshs_shake_shop.add_milkshake(strawberry_dream)

chocolate_addict.price_of_milkshake
strawberry_dream.price_of_milkshake

joshs_shake_shop.get_milkshakes




