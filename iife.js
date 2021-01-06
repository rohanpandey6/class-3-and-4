// Immediately Invoked Function Expression

//Print odd numbers in an array

numbers = [1,2,3,4,5,6,7,8,9]

var odd_numbers =  (function(){
    
    for (var i in numbers){
        if (numbers[i] % 2 !== 0){
            console.log(numbers[i])
        }
    }
})(numbers);




// Convert all the strings to title caps in a string array 

strings = ["hello world","javascript is great","well thats all"]

var title_case = (function(){
    
    for (var i in strings){
        words = strings[i].split(' ');
        for (var j in words){
            words[j] = words[j][0].toUpperCase() + words[j].slice(1);
        }
        strings[i] = words.join(' ');
    }
    return strings
})(strings);

console.log(title_case);



// Sum of all numbers in an array

numbers = [1,2,3,4,5,6,7,8,9]

var sum = (function(){
    var sum = 0;
    for (var i in numbers){
        sum += numbers[i];
    }
    return sum;
})(numbers);

console.log(sum)


// Return all the prime numbers in an array

numbers = [1,2,3,4,5,6,7,8,9,21,25]

var primes = (function(){
    var prime_number = []
    for (var i in numbers){
        
        if (numbers[i] === 1 || numbers[i] === 0){
            continue;
        }
        if (numbers[i] === 2){
            prime_number.push(numbers[i])
        }
        else{
            var is_prime = true;
            for (var j =2; j< numbers[i]; j+=1){
                if (numbers[i] % j === 0){
                    is_prime = false;
                    break;
                }
            }
            if (is_prime){
                prime_number.push(numbers[i]);
            }
        }
        
    }
    return prime_number
})(numbers);

console.log(primes)

// Return all the palindromes in an array 

strings = ["hello","radar","javascript","rotor"]
var are_palindromes = (function(){
    var palindromes = []
    for (var i in strings){
        if (strings[i].toLowerCase() === strings[i].toLowerCase().split('').reverse().join('')){
            palindromes.push(strings[i])        
        }
        
    }
    return palindromes
})(strings);

console.log(are_palindromes)


// Remove duplicates from an array

numbers = [1,1,1,2,2,2,3,3,3,4]


var unique = function(numbers){
    
    return [... new Set(numbers)]
}

console.log(unique(numbers))


// median of 2 sorted arrays

list_1 = [1, 12, 15, 26, 38]
list_2 = [2, 13, 17, 30, 45]


var median = (function(){
    
    combined_list = list_1.concat(list_2).sort((a,b) => a - b)
    middle = Math.floor(combined_list.length / 2);
    if (combined_list.length % 2 === 0){
        return (combined_list[middle] + combined_list[middle-1]) / 2;
        
    }
    return combined_list[middle]
})(list_1,list_2);

console.log(median)



//  Rotate an array by k times and return the rotated array

numbers = [1,2,3,4,5]
var rotate = (function(){
	if (numbers.length > k) {
		numbers.unshift(...numbers.splice(-k))
	}
	else{
		let i = 0;
		while(i < k){
			numbers.unshift(nums.splice(-1))
			i++
		}
		
	}
	return numbers
	
})(numbers,k=4);

console.log(rotate)


