from collections import namedtuple

home = namedtuple('home',['record_id','square_feet','city','zipcode','crime_rate','school_dist','price'])

model = namedtuple('model',['record_id','pred'])

dataset = [
  home(1, 2600, 'Los Angeles',92121,'med', 5,420000),
  home(2, 2500, 'Los Angeles',92122,'high',7,320000),
  home(3, 2300, 'Los Angeles',92122,'high',8,410000),
  home(4, 2600, 'Los Angeles',92122,'high',8,410000),
  home(5, 1900, 'Los Angeles',92125,'low', 10,350000),
  home(6, 2200, 'Seattle', 98101,'low',2,260000),
  home(7, 2100, 'Seattle', 98101,'low',3,280000),
  home(8, 2200, 'Seattle', 98106,'med',9,269094),
  home(9, 2800, 'Seattle', 98106,'med',6,300000),
  home(10, 2100, 'Seattle', 98106,'med',12,240000)
]

model1 = [
  model(1, 403001),
  model(2, 388001),
  model(3, 288912),
  model(4, 420041),
  model(5, 330023),
  model(6, 279034),
  model(7, 260345),
  model(8, 270300),
  model(9, 274002),
  model(10, 159604)
]

model2 = [
  model(1, 421032),
  model(2, 282002),
  model(3, 440600),
  model(4, 450640),
  model(5, 280542),
  model(6, 198432),
  model(7, 288345),
  model(8, 250400),
  model(9, 300500),
  model(10, 220000)
]
