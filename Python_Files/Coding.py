start = input("Welcome to my function, please enter your name here: ")
print (" ")
print ("Hello " + start + ", I hope you are excited to use this feature!")
print (" ")

def intro():
  phase1 = input("Pick a number between 1 and 10: ")
  phase2 = int(phase1)
  if phase2 <= 3:
    print (" ")
    print ("a small picker I see")
    print (" ")
    intro()
  elif phase2 > 3 and phase2 < 6:
    print (" ")
    print ("So you're a middle ground monger then..")
    print (" ")
    intro()
  else:
    print (" ")
    print ("Only big stacks for us my guy! " + start + ", you are one big dick player!")
    print (" ")
    intro()
    
intro()


