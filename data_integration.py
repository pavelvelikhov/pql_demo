from collections import namedtuple

master = namedtuple('master',['first_name','last_name','addresses'])
address = namedtuple('address',['street','city','state','zip'])

master_db = [
  master('John','Doe', [address('10 Main st.','Seattle','WA',81233)]),
  master('Bob','Baits', [address('25 Westpoint st.','Los Angeles','CA',92122),
                         address('
]

order = namedtuple('order',['first_name','last_name','store','product','amount','date'])
store = namedtuple('store',['name','address'])

order_db = [
  order('John','Dowe',
       store('ABC Liquor',address('13 Lincoln st.','Seattle','WA',82133)),
       'Single malt whiskey','25.34','2016-04-13'),
  order('John','Doe',
       store('ABC Liquor',address('13 Lincoln st.','Seattle','WA',82133)),
       'Vodka','10.56','2016-04-16')
]
