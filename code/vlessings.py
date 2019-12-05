from blessings import Terminal
 
t = Terminal()

with t.location(10, 3):
    print("Hola mundo")
