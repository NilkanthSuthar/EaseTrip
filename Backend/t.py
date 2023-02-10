import pandas as pd
df= pd.read_csv('Backend\Stop_Down.csv')

st = df['Bus_Stop_N']
f1= open("stops.txt", "w")
for f in st:
    a= '<option value="',f,'">',f,'</option>\n'
    f1.writelines(a)
f1.close()