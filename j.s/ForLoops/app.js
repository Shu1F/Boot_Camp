// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(19);
// console.log(10);

// for(let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// for(let i = 1; i <= 20; i += 2) {
//     console.log(i);
// }

// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i);
// }

// for (let i = 10; i <= 1000; i *= 10) {
//     console.log(i);
// }

// const animals = [
//     "Lion", "Tiger", "Elephant", "Giraffe", "Zebra", "Penguin", "Koala",
//     "Kangaroo", "Panda", "Monkey", "Bear", "Wolf", "Deer", "Rabbit",
//     "Fox", "Squirrel", "Dolphin", "Shark", "Whale", "Octopus", "Parrot",
//     "Eagle", "Owl", "Falcon", "Horse", "Donkey", "Cat", "Dog", "Cow",
//     "Sheep", "Goat", "Pig", "Chicken", "Duck", "Goose", "Turkey",
//     "Peacock", "Swan", "Frog", "Toad", "Snake", "Lizard", "Turtle",
//     "Crocodile", "Alligator", "Hippopotamus", "Rhinoceros", "Cheetah",
//     "Leopard", "Jaguar", "Bison", "Buffalo", "Moose", "Antelope",
//     "Wombat", "Platypus", "Armadillo", "Sloth", "Chameleon", "Iguana",
//     "Salmon", "Trout", "Tuna", "Crab", "Lobster", "Seahorse", "Starfish",
//     "Jellyfish", "Anemone", "Clownfish", "Hammerhead", "Hawk", "Vulture",
//     "Pigeon", "Sparrow", "Robin", "Woodpecker", "Flamingo", "Stork",
//     "Heron", "Cormorant", "Pelican", "Albatross", "Hummingbird", "Bat",
//     "Bee", "Butterfly", "Moth", "Wasp", "Beetle", "Ant", "Termite",
//     "Grasshopper", "Cricket", "Locust", "Cicada", "Dragonfly", "Firefly",
//     "Ladybug", "Spider", "Scorpion", "Centipede", "Millipede", "Earthworm",
//     "Snail", "Slug", "Oyster", "Mussel", "Clam", "Squid", "Cuttlefish",
//     "Stingray", "Manatee", "Narwhal", "Orca", "Seal", "Walrus", "Sea Lion",
//     "Polar Bear", "Grizzly Bear", "Brown Bear", "Black Bear", "Puma",
//     "Mountain Lion", "Cougar", "Lynx", "Bobcat", "Caracal", "Serval",
//     "Meerkat", "Mongoose", "Honey Badger", "Otter", "Ferret", "Weasel",
//     "Mink", "Ermine", "Stoat", "Hedgehog", "Porcupine", "Beaver", "Muskrat",
//     "Rat", "Mouse", "Hamster", "Guinea Pig", "Chinchilla", "Capybara",
//     "Gorilla", "Chimpanzee", "Orangutan", "Gibbon", "Baboon", "Mandrill",
//     "Lemur", "Aye-Aye", "Tarsier", "Lorikeet", "Cockatoo", "Macaw",
//     "Toucan", "Finch", "Canary", "Parakeet", "Lovebird", "Budgerigar",
//     "Cockatiel", "Quail", "Pheasant", "Peafowl", "Guineafowl", "Pheasant",
//     "Roadrunner", "Ostrich", "Emu", "Cassowary", "Rhea", "Kiwi", "Penguin",
//     "Sandpiper", "Plovers", "Gull", "Tern", "Petrel", "Snipe", "Kingfisher",
//     "Flicker", "Thrush", "Bluebird", "Jay", "Magpie", "Crow", "Raven",
//     "Jackdaw", "Dove", "Pigeon", "Starling", "Mynah", "Oriole", "Shrike",
//     "Warbler", "Vireo", "Blackbird", "Grackle", "Cardinal", "Grosbeak",
//     "Bunting", "Sparrow", "Finch", "Tanager", "Partridge", "Quail", "Grouse",
//     "Pheasant", "Turkey", "Sandgrouse", "Bustard", "Cuckoo", "Roadrunner",
//     "Hoopoe", "Kingfisher", "Bee-eater", "Hornbill", "Woodpecker", "Toucan",
//     "Barbet", "Honeyguide", "Jacamar", "Puffbird", "Trogon", "Motmot",
//     "Roller", "Coraciiformes", "Falcon", "Osprey", "Vulture", "Eagle",
//     "Hawk", "Buzzard", "Kite", "Harrier", "Buteo", "Accipiter", "Goshawk",
//     "Sparrowhawk", "Falco", "Merlin", "Kestrel", "Peregrine", "Falcon",
//     "Harpy", "Owl", "Barn Owl", "Snowy Owl", "Great Horned Owl", "Screech Owl",
//     "Burrowing Owl", "Pygmy Owl", "Scops Owl", "Hawk Owl", "Eagle Owl",
//     "Tawny Owl", "Barred Owl", "Long-eared Owl", "Short-eared Owl", "Nightjar",
//     "Goatsucker", "Nighthawk", "Whip-poor-will", "Chuck-will's-widow",
//     "Frogmouth", "Oilbird", "Owlet-nightjar", "Potoo", "Auk", "Puffin",
//     "Murres", "Guillemot", "Razorbill", "Alcids", "Dovekie", "Little Auk",
//     "Murre", "Guillemot", "Puffin", "Shearwater", "Petrel", "Albatross",
//     "Skua", "Jaeger", "Gull", "Tern", "Skimmer", "Auklet", "Murrelet",
//     "Pigeon Guillemot", "Loon", "Grebe", "Cormorant", "Anhinga", "Frigatebird",
//     "Booby", "Gannet", "Pelican", "Heron", "Egret", "Bittern", "Ibis",
//     "Spoonbill", "Stork", "Flamingo", "Penguin", "Grebe", "Loon", "Cormorant",
//     "Darter", "Pelican", "Shoebill", "Hamerkop", "Heron", "Egret", "Bittern",
//     "Ibises", "Spoonbill", "Stork", "Flamingo", "Swan", "Goose", "Duck",
//     "Screamer", "Magpie Goose", "Flamingo", "Coot", "Gallinule", "Moorhen",
//     "Jacana", "Finfoot", "Sungrebe", "Seriema", "Kagu", "Sunbittern",
//     "Trumpeter", "Limpkin", "Crane", "Rails", "Gallinules", "Moorhens",
//     "Coots", "Grebes", "Loons", "Cormorants", "Darters", "Pelicans",
//     "Shoebill", "Herons", "Bitterns", "Ibises", "Spoonbills", "Storks",
//     "Flamingos", "Penguins", "Petrels", "Shearwaters", "Storm Petrels",
//     "Diving Petrels", "Skuas", "Jaegers", "Gulls", "Terns", "Skimmers",
//     "Auks", "Puffins", "Murrelets", "Murres", "Guillemots", "Little Auk",
//     "Dovekie", "Alcids", "Puffins", "Auklets", "Murrelets", "Murrelets",
//     "Murre", "Guillemot", "Pigeon Guillemot", "Puffin", "Shearwater",
//     "Petrel", "Albatross", "Skua", "Jaeger", "Gull", "Tern", "Skimmer"
// ];

// for (let i = 0; i < animals.length; i++) {
//     console.log(i, animals[i]);
// }

// for (let i = animals.length - 1; i >= 0; i--) {
//     console.log(i, animals[i]);
// }

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i].toUpperCase());
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`iは${i}`);
//     for (let j = 1; j < 4; j++) {
//         console.log(`  jは${j}`);
//     }
// }

// const seatingChart = [
//     ['伊藤', '松本', '鈴木'],
//     ['井上', '田中', '河野', '吉田'],
//     ['安部', '後藤', '橋本']
// ];

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     console.log(`${i + 1}行目`)
//     // console.log(seatingChart[i]);
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j]);
//     }
// }

