class Food 
{
  constructor()
  {
    this.foodStock=0;
    this.image=loadImage('Images/Milk.png');
  }

    updateFoodStock(foodStock) 
    {
      this.foodStock=foodStock;
    }

    deductFood()
    {
      if(this.foodStock>0)
      {
      this.foodStock=this.foodStock-1;
      }
    }

  getFoodStock()
  {
    return this.foodStock;
  }

  display()
  {
    var x  = 80, y = 170;  
    imageMode(CENTER);

    if(this.foodStock!= 0)
    {
      for(var i = 20; i < this.foodStock; i++)
      {
        if(i % 20 === 0)
        {
          x = 80;
          y = y + 50;
        }
        image(this.image,x,y,50,50);
        x = x + 30;
      }
    }
  }
}