
# orobiti warmoeba

def numB(num):
    machineNum = ''
    
    while num > 0:
        if num % 2 == 0:
            machineNum += '0'
        else:
            machineNum += '1'
        num = num // 2
    
    return machineNum or '0'

print(numB(87))
