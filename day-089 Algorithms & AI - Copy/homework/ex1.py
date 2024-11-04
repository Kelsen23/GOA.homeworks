

def longest_length(): 
    end = "ctrlc"
    longest = ""
    
    try:
        while True:
            text = input("Enter text (type 'ctrlc' to stop): ")
            
            if text.lower() == end:  
                break  
            
            if len(longest) < len(text):
                longest = text
                
    except KeyboardInterrupt:
        print("\nProcess interrupted with Ctrl + C.")

    return f"Longest text: {longest}\nLength: {len(longest)}"

print(longest_length())

