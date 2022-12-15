var health = 45;
var defense = 2;


var character = {
  health : 45,
  defense : 2,
  damage: 5,
  base_attack_modifier: 4
}

var joe = {
  health : 100,
  defense : 20,
  damage: 13,
  base_attack_modifier: 10
}

var plop = {
  health : 5,
  defense : 10,
  damage : 5,
  base_attack_modifier: 5
}

var gibble = {
  health : 40,
  defense : 10,
  damage : 15,
  base_attack_modifier: 10
}

function calc_damage(c, damage) {
  var mod_dmg = damage - c.defense;
  
  if(mod_dmg < 0) {
    return c.health;
  }
  var new_health = c.health - mod_dmg;
  c.health = new_health;
  return c.health;
}

var base_attack_modifier = 10;

function calc_attack(c) {
  var mod = Math.floor(Math.random() * c.base_attack_modifier);
  return c.damage + mod;
}

function test_damage(c, e) {
  var actual_damage = calc_attack(e);
  var new_health = calc_damage(c, actual_damage);
  console.log("New health: " + new_health + ", Damage was: " + actual_damage);
}

console.clear();

var player = joe;
var enemy = gibble;

test_damage(player, enemy);

test_damage(player, enemy);

test_damage(player, enemy);

test_damage(player, enemy);

test_damage(player, enemy);
test_damage(player, enemy);


