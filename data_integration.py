from collections import namedtuple

master = namedtuple('master',['first_name','last_name','addresses'])
address = namedtuple('address',['street','city','state','zip'])

master_db = [
  master('John','Doe', [address('10 Main st.','Seattle','WA',81233)]),
  master('Bob','Baits', [address('25 Westpoint st.','Los Angeles','CA',92122),
                         address('40 Lisabon st.','Los Angeles','CA',91222)]),
  master('Bobby','Watts', [address('45 Main st.','Los Angeles','CA',92122)]),
  master('Heather','Brooks',[address('53 East Ln.','Austin','TX',82133)])
]

order = namedtuple('order',['first_name','last_name','store','product','amount','date'])
store = namedtuple('store',['name','address'])

order_db = [
  order('John','Dowe',
       store('ABC Liquor',address('13 Lincoln st.','Seattle','WA',82133)),
       'Single malt whiskey','25.34','2016-04-13'),
  order('John','Doe',
       store('ABC Liquor',address('13 Lincoln st.','Seattle','WA',82133)),
       'Vodka','10.56','2016-04-16'),
  order('Jason','Woods',
       store('Home Depot',address('54 Main st.','Los Angeles','CA',92154)),
        'Paint','16x78xx','2016-03-17'),
  order('Bob','Dole',
       store('Home Depot',address('54 Main st.','Los Angeles','CA',92154)),
        'Lawnmover','215.34','2016-01-20'),
  order('Boby','Watts',
       store('Home Depot',address('54 Main st.','Los Angeles','CA',92154)),
       'Gardening hose','12.05','2016-03-23'),
  order('Boby','Watts',
       store('Target',address('594 Elm street','Los Angeles','CA',92154)),
       'Vacuum cleaner','59.95','2016-04-02'),
  order('Heather','Brooks',
       store('Lights&Candles',address('883 Side st.','Austin','TX',73344)),
       'Candelabra','25.32452','2015-12-10'),
  order('Heather','Brooks',
       store('Lights&Candles',address('883 Side st.','Austin','TX',73344)),
       'Candles','8.22','2015-12-10')
]
