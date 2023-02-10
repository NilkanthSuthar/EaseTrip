import pandas as pd
import matplotlib.pyplot as plt
import json
import geopandas as gpd
gf=gpd.read_file('vadodara-bus-stop_down\Vadodara - Bus Stop_Down.shp')
df=pd.read_csv('Backend\Stop_Down.csv')
#print(gf)
gf.plot()
plt.show()