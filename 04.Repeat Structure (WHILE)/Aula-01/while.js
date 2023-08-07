let speed_down = 100
let speed_up = 20

while (speed_down >= 10) {
  alert("The car is travelling at " + speed_down + " mph")
  speed_down -= 20
  alert("Decreasing 20 mph")
}
alert("The car stopped for gas...")
alert("Fueling...")
alert("The car returned to the road")

while (speed_up <= 80) {
  alert("The car is travelling at " + speed_up + " mph")
  speed_up += 20
  alert("Increasing 20 mph")
}
alert("The car is travelling at " + speed_up + " mph")
alert("Your destination is near...")