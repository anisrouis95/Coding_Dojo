for i in range(0,151,1):
    print(i)

for i in range(4,1001,1):
    if (i%5==0):
        print(i)


for i in range(0,101):
    if (i%10==0):
        print("Coding Dojo")
    elif (i%5==0):
        print("Coding")
    else: print(i)


sum=0
for i in range(0,500001):
    if (i%2!=0):
        sum+=i
print(sum)

for i in range(2018,0,-4):
    print (i)

def function (lowNum,highNum,mult):
    for i in range(lowNum,highNum+1):
        if (i%mult==0):
            print(i)

function(2,9,3)