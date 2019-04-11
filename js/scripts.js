function Pizza(size, crust, vegetables, meats, cheeses) {
  this.size = size;
  this.crust = crust;
  this.vegetables = vegetables;
  this.meats = meats;
  this.cheeses = cheeses;
  this.price;
}

Pizza.prototype.calculatePrice = function() {
  this.price = 10; 
  
  if (this.size === 'Miniscule') {
    this.price -= 3;
  } else if (this.size === 'Monstrous') {
    this.price += 3;
  } else if (this.size === 'Mega-Mammoth-Colassally-Gargantuan') {
    this.price += 6;
  }
  
  if (this.crust === 'deep-dish') {
    this.price += 3;
  } else if (this.crust === 'hand-tossed') {
    this.price += 1;
  } else if (this.crust === 'pan') {
    this.price += 2;
  }
  
    
  for (var i = 0; i < this.vegetables.length; i++) {
    this.price += 1.5;
  }
  
  for (var i = 0; i < this.meats.length; i++) {
    this.price += 2.5;
  }
  
  for (var i = 0; i < this.cheeses.length; i++) {
    this.price += 1;
  }
}


Pizza.prototype.shortDescription = function() {
  return "A " + this.size + " " + this.crust + " pizza: $" + this.price;
}

var displayPizzaDetails = function() {
  $('#pizza-details').show();
  $('#pizza-details h4').text(newPizza.shortDescription());
  $('#vegetables').text(newPizza.vegetables.join(", "));
  $('#meats').text(newPizza.meats.join(", "));
  $('#cheeses').text(newPizza.cheeses.join(", "));
}

$(document).ready(function() {
  $('#order-form').submit(function(event) {
    event.preventDefault();
    
    var size = $('input[name=size]:checked').val();
    var crust = $('input[name=crust]:checked').val();
    var vegetables = $('input:checkbox[name=vegetables]:checked').map(function() {
        return this.value;
      }).get();
    var meats = $('input:checkbox[name=meats]:checked').map(function() {
        return this.value;
      }).get();
    var cheeses = $('input:checkbox[name=cheeses]:checked').map(function() {
        return this.value;
      }).get();
    var newPizza = new Pizza(size, crust, vegetables, meats, cheeses);
    
    newPizza.calculatePrice();
    
    $('#pizza-list').append('<li><span class="pizza">' + newPizza.shortDescription() + '</span></li>');
    
    document.getElementById("order-form").reset();

    $(".pizza").last().click(function() {
      $('#pizza-details').show();
      $('#vegetables').text(newPizza.vegetables.join(", "));
      $('#meats').text(newPizza.meats.join(", "));
      $('#cheeses').text(newPizza.cheeses.join(", "));

    });
  });


});