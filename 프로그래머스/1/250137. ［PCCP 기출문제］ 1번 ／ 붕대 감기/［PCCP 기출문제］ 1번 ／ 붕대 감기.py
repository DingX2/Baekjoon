def solution(bandage, health, attacks):
    times = attacks[-1][0]
    last_time, heal, current_health = attacks[0][0], 0, health;
    for attack in attacks:
        attack_time, damage = attack;
    
        if(attack_time-last_time > 0):
            heal_time = (attack_time-last_time-1)
            heal = heal_time*bandage[1] #초당회복량
            heal += (heal_time//bandage[0]) * bandage[2]
        else: heal = 0
    
        if(current_health+heal >= health): current_health = health;
        else: current_health = current_health+heal;
        
        # print("currentHealth", current_health, damage);
        
        if(current_health-damage <= 0): return -1
        if(times == attack_time): return current_health-damage;
        current_health = current_health-damage;
        
        # print(attack_time, damage , "heal", current_health, "+", heal);

    
        last_time = attack_time;
    
    return 0