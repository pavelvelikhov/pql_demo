from collections import namedtuple

product_db = [
	{"model":"Focus",
         "manufacturer":"Ford",
         "price":{"suggested_retail_price":13000, "average_price":11800},
         "reviews": [{"review_text":"Cheap and neat car", "stars":4},
                     {"review_text":"Love this car", "stars":5},
                     {"review_text":"Pretty bad quality", "stars":2}]},
        {"model":"Explorer",
         "manufacturer":{"company":"Ford","address":"Dearborn, MI, 48126"},
         "price":{"suggested_retail_price":20000, "average_price":18200},
         "reviews": ["great car, super fun",
                     {"review_text":"Love the expoler", "stars":5},
                     {"review_text":"Wonderful SUV", "stars":5},
                     {"review_text":"Good for the money","stars":4}]},
        {"model":"Mustang",
         "manufacturer":"Ford",
         "price":{"suggested_retail_price":25000, "average_price":22000},
         "reviews":["Mean roadster!",
                   {"review_text":"Awesome car!", "stars":5},
                   {"review_text":"OMG love this car!","stars":5}]},
        {"model":"Civic",
         "manufacturer":"Honda",
         "price":14500,
         "reviews":["Lovely!",
                    "Wonderful!",
                    {"review_text":"Decent quality", "stars":4},
                    {"review_text":"Cheap and reliable", "stars":5},
                    {"review_text":"Good for commuting", "stars":4}]},
        {"model":"CRV",
         "manufacturer":"Honda",
         "price":18500,
         "reviews":["Nice!",
                    {"review_text":"Great mini-SUV", "stars":4},
                    {"review_text":"Cheap and reliable", "stars":4},
                    {"review_text":"Didn't like this car", "stars":2}]},
]

dealer = namedtuple('dealer',['dealer', 'make', 'model', 'year', 'purchase_price', 'ad_price'])

dealer_db = [
   dealer('Jason''s cars','Ford','Mustang',2015,20000,26000),
   dealer('Jason''s cars','Ford','Focus',2016,10000,12000),
   dealer('Roy''s dealership','Ford','Focus',2015,9000,11900),
   dealer('Roy''s dealership','Honda','Civic',2016,13000,15300),
   dealer('Local SUVs','Ford','Explorer',2016,16000,20000),
   dealer('Local SUVs','Honda','CRV',2016,17000,19000)
]
