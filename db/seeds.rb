# Group.create([
#   {name: "犬"},
#   {name: "猫"},
#   {name: "馬"}
# ])

group = Group.find(1)
group.messages.create([
  {message: "こんにちわ"},
  {message: "こんばんわ"},
  {message: "おはようございます"}
])
