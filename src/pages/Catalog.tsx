import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

const getProductImagePath = (code: string) => `/images/products/${code}.jpeg`;

// Your categories and counts
const toyCategories = [
  'Blocks', 'Board Games', 'Conceptual', 'Intellectual', 'Lacing', 'Musical',
  'Phonics Game', 'Playing', 'Pretend', 'Pretend Toy', 'Puzzle', 'Stake Up',
  'Vehicle', 'Wooden', 'Wooden Puzzle', 'Miscellaneous'
];

const categoryCounts = {
  "Blocks": 12, "Board Games": 8, "Conceptual": 21, "Intellectual": 14, "Lacing": 9,
  "Miscellaneous": 17, "Musical": 5, "Phonics Game": 7, "Playing": 22, "Pretend": 10,
  "Pretend Toy": 6, "Puzzle": 28, "Stake Up": 4, "Vehicle": 11, "Wooden": 187, "Wooden Puzzle": 29
};

// Add full 390-product array here
const products = [
  { 'id': 1, 'code': 'TS397', 'name': 'Brick Tiles Blocks', 'category': 'Blocks', 'type': 'toy', 'image': '', 'description': 'Classic building blocks shaped like brick tiles for creative construction and architectural play', 'age': '3+', 'rating': 0, 'features': ['Interlocking design', 'Develops spatial skills'] },
  { 'id': 2, 'code': 'TS851', 'name': 'Bullet Blocks', 'category': 'Blocks', 'type': 'toy', 'image': '', 'description': 'Streamlined bullet-shaped building blocks for dynamic construction projects', 'age': '4+', 'rating': 0, 'features': ['Aerodynamic shape', 'Promotes engineering thinking'] },
  { 'id': 3, 'code': 'TS856', 'name': 'Cat Link Ups', 'category': 'Blocks', 'type': 'toy', 'image': '', 'description': 'Adorable cat-themed linking blocks that connect together for endless building fun', 'age': '3+', 'rating': 0, 'features': ['Animal theme', 'Easy-connect system'] },
  { 'id': 4, 'code': 'TS514', 'name': 'Childhood Fun Intelligent Blocks', 'category': 'Blocks', 'type': 'toy', 'image': '', 'description': 'Educational building blocks designed to enhance cognitive development and problem-solving skills', 'age': '4+', 'rating': 0, 'features': ['Educational design', 'Cognitive development'] },
  { 'id': 5, 'code': 'TS464', 'name': 'Clown Balancing', 'category': 'Blocks', 'type': 'toy', 'image': '', 'description': 'Colorful clown-themed balancing blocks that teach balance and coordination while building', 'age': '3+', 'rating': 0, 'features': ['Balance training', 'Colorful clown design'] },
  { 'id': 6, 'code': 'TS161', 'name': 'Dairy Farm Blocks', 'category': 'Blocks', 'type': 'toy', 'image': '', 'description': 'Farm-themed building blocks featuring dairy animals and farm structures for imaginative play', 'age': '3+', 'rating': 0, 'features': ['Farm theme', 'Animal figures included'] },
  { 'id': 7, 'code': 'TS842', 'name': 'Edu Blocks', 'category': 'Blocks', 'type': 'toy', 'image': '', 'description': 'Educational building blocks with letters, numbers, and shapes for learning while playing', 'age': '3+', 'rating': 0, 'features': ['Learning elements', 'Multi-concept education'] },
  { 'id': 8, 'code': 'TS223', 'name': 'Edu Blocks 1', 'category': 'Blocks', 'type': 'toy', 'image': '', 'description': 'First level educational blocks introducing basic concepts like colors, shapes, and counting', 'age': '2+', 'rating': 0, 'features': ['Beginner level', 'Basic concepts'] },
  { 'id': 9, 'code': 'TS846', 'name': 'Flower Blocks', 'category': 'Blocks', 'type': 'toy', 'image': '', 'description': 'Beautiful flower-shaped building blocks in vibrant colors for creative garden-themed constructions', 'age': '3+', 'rating': 0, 'features': ['Flower shapes', 'Vibrant colors'] },
  { 'id': 10, 'code': 'TS852', 'name': 'Flower Link Ups', 'category': 'Blocks', 'type': 'toy', 'image': '', 'description': 'Interlocking flower-themed blocks that connect to create beautiful floral patterns and structures', 'age': '3+', 'rating': 0, 'features': ['Floral patterns', 'Interlocking system'] },
  { 'id': 11, 'code': 'TS840', 'name': 'Giant Polydrone', 'category': 'Blocks', 'type': 'toy', 'image': '', 'description': 'Large geometric building blocks with multiple faces for advanced 3D construction projects', 'age': '5+', 'rating': 0, 'features': ['Giant size', 'Geometric shapes'] },
  { 'id': 12, 'code': 'TS120', 'name': 'Granular Blocks', 'category': 'Blocks', 'type': 'toy', 'image': '', 'description': 'Small granular building blocks perfect for detailed construction and fine motor skill development', 'age': '4+', 'rating': 0, 'features': ['Fine motor skills', 'Detailed construction'] },
  { 'id': 13, 'code': 'TS844', 'name': 'Hexie Blocks', 'category': 'Blocks', 'type': 'toy', 'image': '', 'description': 'Hexagon-shaped building blocks that tessellate perfectly for creating honeycomb patterns', 'age': '4+', 'rating': 0, 'features': ['Hexagonal shape', 'Tessellation patterns'] },
  { 'id': 14, 'code': 'TS337', 'name': 'House Blocks 2', 'category': 'Blocks', 'type': 'toy', 'image': '', 'description': 'House-building blocks set with walls, roofs, and architectural elements for realistic constructions', 'age': '4+', 'rating': 0, 'features': ['Architectural elements', 'Realistic building'] },
  { 'id': 15, 'code': 'TS431', 'name': 'House Building Blocks 3', 'category': 'Blocks', 'type': 'toy', 'image': '', 'description': 'Advanced house building set with detailed components for creating elaborate home structures', 'age': '5+', 'rating': 0, 'features': ['Advanced building', 'Detailed components'] },
  { 'id': 16, 'code': 'TS434', 'name': 'House Building Blocks 3', 'category': 'Blocks', 'type': 'toy', 'image': '', 'description': 'Comprehensive house building blocks with doors, windows, and decorative elements', 'age': '5+', 'rating': 0, 'features': ['Doors and windows', 'Decorative elements'] },
  { 'id': 17, 'code': 'TS571', 'name': 'Jumbo Blocks', 'category': 'Blocks', 'type': 'toy', 'image': '', 'description': 'Extra-large building blocks perfect for toddlers and big construction projects', 'age': '2+', 'rating': 0, 'features': ['Extra-large size', 'Toddler-friendly'] },
  { 'id': 18, 'code': 'TS162', 'name': 'Jungle Blocks', 'category': 'Blocks', 'type': 'toy', 'image': '', 'description': 'Jungle-themed building blocks featuring wild animals and tropical elements', 'age': '3+', 'rating': 0, 'features': ['Jungle theme', 'Wild animal figures'] },
  { 'id': 19, 'code': 'TS849', 'name': 'Junior Builders', 'category': 'Blocks', 'type': 'toy', 'image': '', 'description': 'Building blocks designed specifically for young builders with easy-grip design', 'age': '2+', 'rating': 0, 'features': ['Easy-grip design', 'Junior-friendly'] },
  { 'id': 20, 'code': 'TS462', 'name': 'Lego Duplo', 'category': 'Blocks', 'type': 'toy', 'image': '', 'description': 'Compatible large building blocks for safe play and creative construction for toddlers', 'age': '2+', 'rating': 0, 'features': ['Duplo compatible', 'Safe for toddlers'] },
  { 'id': 21, 'code': 'TS843', 'name': 'Magnetics House Blocks', 'category': 'Blocks', 'type': 'toy', 'image': '', 'description': 'Magnetic building blocks for house construction with easy snap-together connections', 'age': '4+', 'rating': 0, 'features': ['Magnetic connection', 'Easy assembly'] },
  { 'id': 22, 'code': 'TS850', 'name': 'Miracle Bricks', 'category': 'Blocks', 'type': 'toy', 'image': '', 'description': 'Innovative building bricks with special connecting features for miraculous constructions', 'age': '4+', 'rating': 0, 'features': ['Innovative design', 'Special connections'] },
  { 'id': 23, 'code': 'TS841', 'name': 'Ok Play Train Blocks', 'category': 'Blocks', 'type': 'toy', 'image': '', 'description': 'Train-themed building blocks that can be assembled into locomotives and carriages', 'age': '3+', 'rating': 0, 'features': ['Train theme', 'Vehicle assembly'] },
  { 'id': 24, 'code': 'TS347', 'name': 'On U Mind', 'category': 'Blocks', 'type': 'toy', 'image': '', 'description': 'Mind-challenging building blocks that promote creative thinking and problem-solving', 'age': '5+', 'rating': 0, 'features': ['Mind challenge', 'Problem-solving'] },
  { 'id': 25, 'code': 'TS845', 'name': 'Playtown Hopuse Blocks', 'category': 'Blocks', 'type': 'toy', 'image': '', 'description': 'Town-themed building blocks for creating an entire miniature city with houses and buildings', 'age': '4+', 'rating': 0, 'features': ['Town theme', 'City building'] },
  { 'id': 26, 'code': 'TS855', 'name': 'Saxo Flute', 'category': 'Blocks', 'type': 'toy', 'image': '', 'description': 'Musical building blocks that can be assembled into saxophone and flute shapes', 'age': '4+', 'rating': 0, 'features': ['Musical theme', 'Instrument shapes'] },
  { 'id': 27, 'code': 'TS853', 'name': 'Stylo Blocks', 'category': 'Blocks', 'type': 'toy', 'image': '', 'description': 'Stylish modern building blocks with contemporary designs and sleek connections', 'age': '4+', 'rating': 0, 'features': ['Modern design', 'Stylish appearance'] },
  { 'id': 28, 'code': 'TS133', 'name': 'Sun Modello', 'category': 'Blocks', 'type': 'toy', 'image': '', 'description': 'Sun-themed building model blocks with bright colors and solar system elements', 'age': '4+', 'rating': 0, 'features': ['Solar theme', 'Bright colors'] },
  { 'id': 29, 'code': 'TS463', 'name': 'Zoo Carnival', 'category': 'Blocks', 'type': 'toy', 'image': '', 'description': 'Zoo and carnival-themed building blocks with animals and fun fair elements', 'age': '3+', 'rating': 0, 'features': ['Zoo theme', 'Carnival elements'] },
  
  // Board Games
  { 'id': 30, 'code': 'TS378', 'name': 'Game Of States', 'category': 'Board Games', 'type': 'toy', 'image': '', 'description': 'Educational board game teaching geography and facts about different states', 'age': '8+', 'rating': 0, 'features': ['Geography learning', 'State facts'] },
  { 'id': 31, 'code': 'TS377', 'name': 'Trap', 'category': 'Board Games', 'type': 'toy', 'image': '', 'description': 'Strategic board game where players set traps and avoid obstacles to win', 'age': '6+', 'rating': 0, 'features': ['Strategic gameplay', 'Trap mechanics'] },
  
  // Conceptual Toys
  { 'id': 32, 'code': 'TS152', 'name': 'Action Reaction', 'category': 'Conceptual', 'type': 'toy', 'image': '', 'description': 'Cause and effect learning toy demonstrating action and reaction principles', 'age': '4+', 'rating': 0, 'features': ['Cause-effect learning', 'Science concepts'] },
  { 'id': 33, 'code': 'TS858', 'name': 'Animal Baaied', 'category': 'Conceptual', 'type': 'toy', 'image': '', 'description': 'Animal-based learning toy focusing on animal sounds and characteristics', 'age': '3+', 'rating': 0, 'features': ['Animal sounds', 'Characteristic learning'] },
  { 'id': 34, 'code': 'TS033', 'name': 'Animal Baby & Habitat', 'category': 'Conceptual', 'type': 'toy', 'image': '', 'description': 'Educational toy teaching about baby animals and their natural habitats', 'age': '3+', 'rating': 0, 'features': ['Habitat learning', 'Baby animals'] },
  { 'id': 35, 'code': 'TS451', 'name': 'Animal Bingo', 'category': 'Conceptual', 'type': 'toy', 'image': '', 'description': 'Classic bingo game featuring various animals for fun learning experience', 'age': '4+', 'rating': 0, 'features': ['Bingo gameplay', 'Animal recognition'] },
  { 'id': 36, 'code': 'TS907', 'name': 'Animal Pairing Sleeve', 'category': 'Conceptual', 'type': 'toy', 'image': '', 'description': 'Matching game with sleeve format for pairing animals and learning relationships', 'age': '3+', 'rating': 0, 'features': ['Pairing skills', 'Animal relationships'] },
  { 'id': 37, 'code': 'TS050', 'name': 'Bug Building', 'category': 'Conceptual', 'type': 'toy', 'image': '', 'description': 'Insect-themed construction toy for learning about bug anatomy and characteristics', 'age': '4+', 'rating': 0, 'features': ['Insect learning', 'Anatomy education'] },
  { 'id': 38, 'code': 'TS873', 'name': 'Classification Box', 'category': 'Conceptual', 'type': 'toy', 'image': '', 'description': 'Sorting and classification toy with multiple categories for organizing skills', 'age': '3+', 'rating': 0, 'features': ['Sorting skills', 'Classification learning'] },
  { 'id': 39, 'code': 'TS860', 'name': 'Colour Chain', 'category': 'Conceptual', 'type': 'toy', 'image': '', 'description': 'Colorful chain links for learning color patterns and sequencing skills', 'age': '3+', 'rating': 0, 'features': ['Color patterns', 'Sequencing skills'] },
  { 'id': 40, 'code': 'TS351', 'name': 'Colour Fun', 'category': 'Conceptual', 'type': 'toy', 'image': '', 'description': 'Interactive color learning toy with games and activities for color recognition', 'age': '2+', 'rating': 0, 'features': ['Color recognition', 'Interactive games'] },
  { 'id': 41, 'code': 'TS872', 'name': 'Colours & Shape Fun', 'category': 'Conceptual', 'type': 'toy', 'image': '', 'description': 'Combined learning toy for colors and shapes with engaging activities', 'age': '3+', 'rating': 0, 'features': ['Color and shape learning', 'Combined concepts'] },
  { 'id': 42, 'code': 'TS868', 'name': 'Colours Around Us Wooden', 'category': 'Conceptual', 'type': 'toy', 'image': '', 'description': 'Wooden toy exploring colors found in everyday environment and nature', 'age': '3+', 'rating': 0, 'features': ['Natural materials', 'Environmental colors'] },
  { 'id': 43, 'code': 'TS865', 'name': 'Colours Matching', 'category': 'Conceptual', 'type': 'toy', 'image': '', 'description': 'Color matching game developing visual discrimination and memory skills', 'age': '3+', 'rating': 0, 'features': ['Color matching', 'Memory skills'] },
  { 'id': 44, 'code': 'TS150', 'name': 'Criss Cross', 'category': 'Conceptual', 'type': 'toy', 'image': '', 'description': 'Pattern-making toy with criss-cross design for spatial reasoning development', 'age': '4+', 'rating': 0, 'features': ['Pattern making', 'Spatial reasoning'] },
  { 'id': 45, 'code': 'TS864', 'name': 'Expression Puzzl', 'category': 'Conceptual', 'type': 'toy', 'image': '', 'description': 'Puzzle focusing on facial expressions and emotions for emotional intelligence', 'age': '4+', 'rating': 0, 'features': ['Emotion recognition', 'Expression learning'] },
  { 'id': 46, 'code': 'TS108', 'name': 'Find The Sequence Wooden', 'category': 'Conceptual', 'type': 'toy', 'image': '', 'description': 'Wooden sequencing toy for logical thinking and pattern recognition skills', 'age': '4+', 'rating': 0, 'features': ['Sequence learning', 'Logical thinking'] },
  { 'id': 47, 'code': 'TS024', 'name': 'Fisherman Shape Sorter', 'category': 'Conceptual', 'type': 'toy', 'image': '', 'description': 'Fishing-themed shape sorter combining fine motor skills with shape recognition', 'age': '2+', 'rating': 0, 'features': ['Shape sorting', 'Fishing theme'] },
  { 'id': 48, 'code': 'TS149', 'name': 'Food Whiz', 'category': 'Conceptual', 'type': 'toy', 'image': '', 'description': 'Food-themed learning toy teaching nutrition and healthy eating concepts', 'age': '3+', 'rating': 0, 'features': ['Nutrition learning', 'Food classification'] },
  { 'id': 49, 'code': 'TS019', 'name': 'Fun With Opposittes', 'category': 'Conceptual', 'type': 'toy', 'image': '', 'description': 'Educational toy teaching opposite concepts through fun interactive activities', 'age': '3+', 'rating': 0, 'features': ['Opposite concepts', 'Language development'] },
  { 'id': 50, 'code': 'TS863', 'name': 'Hexa Numbers', 'category': 'Conceptual', 'type': 'toy', 'image': '', 'description': 'Hexagon-shaped number learning toy combining geometry with mathematics', 'age': '4+', 'rating': 0, 'features': ['Number learning', 'Geometric shapes'] },
  { 'id': 51, 'code': 'TS455', 'name': 'Match & Learn Opposites', 'category': 'Conceptual', 'type': 'toy', 'image': '', 'description': 'Matching game specifically designed for learning opposite concepts and vocabulary', 'age': '3+', 'rating': 0, 'features': ['Matching skills', 'Vocabulary building'] },
  { 'id': 52, 'code': 'TS082', 'name': 'Match It Wooden', 'category': 'Conceptual', 'type': 'toy', 'image': '', 'description': 'Wooden matching game with various categories for cognitive skill development', 'age': '3+', 'rating': 0, 'features': ['Matching skills', 'Wooden construction'] },
  { 'id': 53, 'code': 'TS861', 'name': 'Opposite Cards', 'category': 'Conceptual', 'type': 'toy', 'image': '', 'description': 'Card-based learning system for teaching opposite concepts through visual pairs', 'age': '4+', 'rating': 0, 'features': ['Card format', 'Visual learning'] },
  { 'id': 54, 'code': 'TS394', 'name': 'Orange & Lemon', 'category': 'Conceptual', 'type': 'toy', 'image': '', 'description': 'Fruit-themed learning toy teaching colors, shapes, and basic categorization', 'age': '2+', 'rating': 0, 'features': ['Fruit learning', 'Color concepts'] },
  { 'id': 55, 'code': 'TS870', 'name': 'Peppa Pig Memory Game', 'category': 'Conceptual', 'type': 'toy', 'image': '', 'description': 'Popular character-themed memory game for developing concentration and recall', 'age': '3+', 'rating': 0, 'features': ['Character theme', 'Memory development'] },
  { 'id': 56, 'code': 'TS151', 'name': 'Shadow Matching  Wooden', 'category': 'Conceptual', 'type': 'toy', 'image': '', 'description': 'Wooden shadow matching game for visual perception and shape recognition', 'age': '3+', 'rating': 0, 'features': ['Shadow matching', 'Visual perception'] },
  { 'id': 57, 'code': 'TS871', 'name': 'Shape 3 Piece Puzle', 'category': 'Conceptual', 'type': 'toy', 'image': '', 'description': 'Simple 3-piece puzzles focusing on basic shape recognition for young learners', 'age': '2+', 'rating': 0, 'features': ['Simple puzzles', 'Basic shapes'] },
  { 'id': 58, 'code': 'TS025', 'name': 'Shape Make Box', 'category': 'Conceptual', 'type': 'toy', 'image': '', 'description': 'Shape creation box with various geometric pieces for building and learning', 'age': '3+', 'rating': 0, 'features': ['Shape creation', 'Geometric learning'] },
  { 'id': 59, 'code': 'TS067', 'name': 'Shapes Around Us', 'category': 'Conceptual', 'type': 'toy', 'image': '', 'description': 'Educational toy showing how shapes appear in everyday objects and environment', 'age': '3+', 'rating': 0, 'features': ['Real-world shapes', 'Environmental learning'] },
  { 'id': 60, 'code': 'TS073', 'name': 'Ship Shape', 'category': 'Conceptual', 'type': 'toy', 'image': '', 'description': 'Nautical-themed shape learning toy with ships and maritime elements', 'age': '3+', 'rating': 0, 'features': ['Nautical theme', 'Shape learning'] },
  { 'id': 61, 'code': 'TS371', 'name': 'When Series', 'category': 'Conceptual', 'type': 'toy', 'image': '', 'description': 'Time and sequence learning toy teaching "when" concepts and temporal relationships', 'age': '4+', 'rating': 0, 'features': ['Time concepts', 'Sequence learning'] },
  { 'id': 62, 'code': 'TS859', 'name': 'Why Series', 'category': 'Conceptual', 'type': 'toy', 'image': '', 'description': 'Cause and effect learning toy encouraging questions and scientific thinking', 'age': '4+', 'rating': 0, 'features': ['Cause-effect learning', 'Scientific thinking'] },
  { 'id': 63, 'code': 'TS862', 'name': 'Zoom Out', 'category': 'Conceptual', 'type': 'toy', 'image': '', 'description': 'Visual perception toy with zoom-out concept for understanding scale and perspective', 'age': '4+', 'rating': 0, 'features': ['Scale understanding', 'Visual perception'] },
  
  // Intellectual Toys
  { 'id': 64, 'code': 'TS746', 'name': 'African Safari', 'category': 'Intellectual', 'type': 'toy', 'image': '', 'description': 'Safari-themed intellectual game with African wildlife and adventure challenges', 'age': '6+', 'rating': 0, 'features': ['Safari theme', 'Challenge-based'] },
  { 'id': 65, 'code': 'TS755', 'name': 'Brain Booster', 'category': 'Intellectual', 'type': 'toy', 'image': '', 'description': 'Cognitive enhancement toy with multiple brain training activities and puzzles', 'age': '5+', 'rating': 0, 'features': ['Brain training', 'Multiple activities'] },
  { 'id': 66, 'code': 'TS396', 'name': 'Brain Twister 2 In 1', 'category': 'Intellectual', 'type': 'toy', 'image': '', 'description': 'Dual-function brain teaser combining two different intellectual challenges', 'age': '6+', 'rating': 0, 'features': ['Dual function', 'Brain teaser'] },
  { 'id': 67, 'code': 'TS087', 'name': 'Brick To Brick', 'category': 'Intellectual', 'type': 'toy', 'image': '', 'description': 'Sequential building challenge requiring logical thinking and planning skills', 'age': '5+', 'rating': 0, 'features': ['Sequential building', 'Logical thinking'] },
  { 'id': 68, 'code': 'TS172', 'name': 'Colour Track', 'category': 'Intellectual', 'type': 'toy', 'image': '', 'description': 'Color-based tracking game developing pattern recognition and following skills', 'age': '4+', 'rating': 0, 'features': ['Pattern tracking', 'Color sequences'] },
  { 'id': 69, 'code': 'TS747', 'name': 'Dominoes Black', 'category': 'Intellectual', 'type': 'toy', 'image': '', 'description': 'Classic black dominoes set for strategic gameplay and mathematical thinking', 'age': '6+', 'rating': 0, 'features': ['Classic dominoes', 'Strategic gameplay'] },
  { 'id': 70, 'code': 'TS745', 'name': 'First Cry Intellikit', 'category': 'Intellectual', 'type': 'toy', 'image': '', 'description': 'Comprehensive intelligence development kit with multiple cognitive activities', 'age': '4+', 'rating': 0, 'features': ['Multiple activities', 'Intelligence development'] },
  { 'id': 71, 'code': 'TS300', 'name': 'Flag It', 'category': 'Intellectual', 'type': 'toy', 'image': '', 'description': 'Flag recognition and geography game for learning about world countries', 'age': '6+', 'rating': 0, 'features': ['Flag recognition', 'Geography learning'] },
  { 'id': 72, 'code': 'TS754', 'name': 'Four In A Row', 'category': 'Intellectual', 'type': 'toy', 'image': '', 'description': 'Strategic alignment game requiring forward thinking and tactical planning', 'age': '5+', 'rating': 0, 'features': ['Strategic thinking', 'Tactical planning'] },
  { 'id': 73, 'code': 'TS372', 'name': 'Hide & Seek Jungle', 'category': 'Intellectual', 'type': 'toy', 'image': '', 'description': 'Jungle-themed puzzle game with hidden elements and discovery challenges', 'age': '4+', 'rating': 0, 'features': ['Hidden elements', 'Discovery challenges'] },
  { 'id': 74, 'code': 'TS753', 'name': 'Jumping Frog', 'category': 'Intellectual', 'type': 'toy', 'image': '', 'description': 'Logic puzzle with jumping frog mechanics for sequential problem solving', 'age': '5+', 'rating': 0, 'features': ['Logic puzzle', 'Sequential solving'] },
  { 'id': 75, 'code': 'TS748', 'name': "Let'S Sort Together", 'category': 'Intellectual', 'type': 'toy', 'image': '', 'description': 'Collaborative sorting game promoting teamwork and classification skills', 'age': '4+', 'rating': 0, 'features': ['Collaborative play', 'Sorting skills'] },
  { 'id': 76, 'code': 'TS742', 'name': 'Line 0-5', 'category': 'Intellectual', 'type': 'toy', 'image': '', 'description': 'Number line learning toy for understanding basic mathematical concepts 0-5', 'age': '3+', 'rating': 0, 'features': ['Number line', 'Basic math'] },
  { 'id': 77, 'code': 'TS388', 'name': 'Link Designer', 'category': 'Intellectual', 'type': 'toy', 'image': '', 'description': 'Creative linking system for designing and building complex structures', 'age': '5+', 'rating': 0, 'features': ['Creative design', 'Complex structures'] },
  { 'id': 78, 'code': 'TS751', 'name': 'Magnetic Designer 3 In 1', 'category': 'Intellectual', 'type': 'toy', 'image': '', 'description': 'Three-in-one magnetic design system for versatile creative construction', 'age': '5+', 'rating': 0, 'features': ['Magnetic pieces', 'Triple functionality'] },
  { 'id': 79, 'code': 'TS752', 'name': 'Magnetic Vehicles', 'category': 'Intellectual', 'type': 'toy', 'image': '', 'description': 'Magnetic vehicle construction set for building cars, trucks, and transportation', 'age': '4+', 'rating': 0, 'features': ['Vehicle building', 'Magnetic assembly'] },
  { 'id': 80, 'code': 'TS317', 'name': 'Master Mind Junior', 'category': 'Intellectual', 'type': 'toy', 'image': '', 'description': 'Junior version of classic code-breaking game for developing deductive reasoning', 'age': '5+', 'rating': 0, 'features': ['Code breaking', 'Deductive reasoning'] },
  { 'id': 81, 'code': 'TS749', 'name': 'Monkey Basket', 'category': 'Intellectual', 'type': 'toy', 'image': '', 'description': 'Monkey-themed sorting and coordination game with basket challenges', 'age': '4+', 'rating': 0, 'features': ['Sorting game', 'Coordination skills'] },
  { 'id': 82, 'code': 'TS750', 'name': 'My Daily Calendar', 'category': 'Intellectual', 'type': 'toy', 'image': '', 'description': 'Interactive calendar toy for learning days, months, and time concepts', 'age': '4+', 'rating': 0, 'features': ['Time learning', 'Calendar skills'] },
  { 'id': 83, 'code': 'TS743', 'name': 'Skill Matches', 'category': 'Intellectual', 'type': 'toy', 'image': '', 'description': 'Multi-skill matching game combining various cognitive abilities', 'age': '4+', 'rating': 0, 'features': ['Multi-skill', 'Cognitive development'] },
  { 'id': 84, 'code': 'TS211', 'name': 'Sudoku  Mickey', 'category': 'Intellectual', 'type': 'toy', 'image': '', 'description': 'Mickey Mouse themed Sudoku puzzle for logical thinking and number placement', 'age': '6+', 'rating': 0, 'features': ['Mickey theme', 'Logic puzzles'] },
  { 'id': 85, 'code': 'TS282', 'name': 'Sudoku Junior', 'category': 'Intellectual', 'type': 'toy', 'image': '', 'description': 'Simplified Sudoku puzzles designed for young minds to develop logic skills', 'age': '5+', 'rating': 0, 'features': ['Simplified puzzles', 'Logic development'] },
  { 'id': 86, 'code': 'TS326', 'name': 'Traffic Hour', 'category': 'Intellectual', 'type': 'toy', 'image': '', 'description': 'Traffic management puzzle game teaching planning and coordination skills', 'age': '5+', 'rating': 0, 'features': ['Traffic management', 'Planning skills'] },
  { 'id': 87, 'code': 'TS313', 'name': 'Visual Logic', 'category': 'Intellectual', 'type': 'toy', 'image': '', 'description': 'Visual pattern and logic game for developing analytical thinking skills', 'age': '5+', 'rating': 0, 'features': ['Visual patterns', 'Analytical thinking'] },
  { 'id': 88, 'code': 'TS744', 'name': 'World Tour', 'category': 'Intellectual', 'type': 'toy', 'image': '', 'description': 'Geography-based intellectual game exploring countries and cultures worldwide', 'age': '6+', 'rating': 0, 'features': ['Geography learning', 'Cultural exploration'] },

  // Lacing Toys
  { 'id': 89, 'code': 'TS621', 'name': '', 'category': 'Lacing', 'type': 'toy', 'image': '', 'description': 'Basic lacing activity for developing fine motor skills and hand-eye coordination', 'age': '3+', 'rating': 0, 'features': ['Fine motor skills', 'Hand-eye coordination'] },
  { 'id': 90, 'code': 'TS605', 'name': 'Around The World Musical', 'category': 'Lacing', 'type': 'toy', 'image': '', 'description': 'Musical lacing toy with world themes and cultural sounds', 'age': '3+', 'rating': 0, 'features': ['Musical elements', 'Cultural themes'] },
  { 'id': 91, 'code': 'TS620', 'name': 'At The Garage Tray', 'category': 'Lacing', 'type': 'toy', 'image': '', 'description': 'Garage-themed lacing tray with vehicle and tool lacing activities', 'age': '3+', 'rating': 0, 'features': ['Garage theme', 'Vehicle lacing'] },
  { 'id': 92, 'code': 'TS614', 'name': 'Basket Ball Mini', 'category': 'Lacing', 'type': 'toy', 'image': '', 'description': 'Mini basketball-themed toy combining sports with fine motor skill development', 'age': '3+', 'rating': 0, 'features': ['Sports theme', 'Mini size'] },
  { 'id': 93, 'code': 'TS619', 'name': 'Basket Ball Musical Hoop', 'category': 'Lacing', 'type': 'toy', 'image': '', 'description': 'Musical basketball hoop with lacing elements and sports sound effects', 'age': '3+', 'rating': 0, 'features': ['Musical sounds', 'Basketball theme'] },
  { 'id': 94, 'code': 'TS596', 'name': 'Button Lacing', 'category': 'Lacing', 'type': 'toy', 'image': '', 'description': 'Button-themed lacing activity teaching practical life skills and coordination', 'age': '3+', 'rating': 0, 'features': ['Life skills', 'Button practice'] },
  { 'id': 95, 'code': 'TS607', 'name': 'Chicoo Cup Bowling', 'category': 'Lacing', 'type': 'toy', 'image': '', 'description': 'Bowling game with cups combining sport activity with motor skill development', 'age': '3+', 'rating': 0, 'features': ['Bowling game', 'Cup stacking'] },
  { 'id': 96, 'code': 'TS618', 'name': 'Chicoo Mister Ring', 'category': 'Lacing', 'type': 'toy', 'image': '', 'description': 'Ring-based activity toy with multiple challenge levels for skill progression', 'age': '2+', 'rating': 0, 'features': ['Ring activities', 'Progressive difficulty'] },
  { 'id': 97, 'code': 'TS606', 'name': 'Clour Race', 'category': 'Lacing', 'type': 'toy', 'image': '', 'description': 'Color-based racing game combining speed with color recognition skills', 'age': '3+', 'rating': 0, 'features': ['Color recognition', 'Racing element'] },
  { 'id': 98, 'code': 'TS609', 'name': 'Cricket Set', 'category': 'Lacing', 'type': 'toy', 'image': '', 'description': 'Cricket-themed play set introducing children to popular sport concepts', 'age': '4+', 'rating': 0, 'features': ['Cricket theme', 'Sports introduction'] },
  { 'id': 99, 'code': 'TS612', 'name': 'Egg Sorter Box', 'category': 'Lacing', 'type': 'toy', 'image': '', 'description': 'Egg-shaped sorting box for categorization and fine motor skill development', 'age': '2+', 'rating': 0, 'features': ['Egg shapes', 'Sorting skills'] },
  { 'id': 100, 'code': 'TS615', 'name': 'Elephant Twist & Turn', 'category': 'Lacing', 'type': 'toy', 'image': '', 'description': 'Elephant-themed twisting toy for developing wrist movement and coordination', 'age': '2+', 'rating': 0, 'features': ['Elephant theme', 'Twisting motion'] },
  { 'id': 101, 'code': 'TS613', 'name': 'Fun Rotating Snail', 'category': 'Lacing', 'type': 'toy', 'image': '', 'description': 'Rotating snail toy with engaging movement patterns and colorful design', 'age': '2+', 'rating': 0, 'features': ['Rotating action', 'Snail theme'] },
  { 'id': 102, 'code': 'TS603', 'name': 'Geometric Shape Sorter Puzzle', 'category': 'Lacing', 'type': 'toy', 'image': '', 'description': 'Shape sorting puzzle combining geometry learning with problem-solving', 'age': '3+', 'rating': 0, 'features': ['Shape sorting', 'Geometric learning'] },
  { 'id': 103, 'code': 'TS608', 'name': 'Gobble', 'category': 'Lacing', 'type': 'toy', 'image': '', 'description': 'Interactive feeding game with gobbling action and cause-effect learning', 'age': '2+', 'rating': 0, 'features': ['Feeding game', 'Interactive action'] },
  { 'id': 104, 'code': 'TS611', 'name': 'Knobbed Cylinders Colour', 'category': 'Lacing', 'type': 'toy', 'image': '', 'description': 'Montessori-inspired knobbed cylinders in various colors for sensory learning', 'age': '2+', 'rating': 0, 'features': ['Montessori inspired', 'Sensory learning'] },
  { 'id': 105, 'code': 'TS234', 'name': 'Lacing Figures', 'category': 'Lacing', 'type': 'toy', 'image': '', 'description': 'Figure-shaped lacing cards for developing threading skills and patterns', 'age': '3+', 'rating': 0, 'features': ['Figure shapes', 'Threading skills'] },
  { 'id': 106, 'code': 'TS617', 'name': 'Magnetic Sticks', 'category': 'Lacing', 'type': 'toy', 'image': '', 'description': 'Magnetic stick construction toy for building and magnetic force exploration', 'age': '3+', 'rating': 0, 'features': ['Magnetic force', 'Construction play'] },
  { 'id': 107, 'code': 'TS610', 'name': 'Musical Activity', 'category': 'Lacing', 'type': 'toy', 'image': '', 'description': 'Musical activity center with multiple instruments and sound exploration', 'age': '2+', 'rating': 0, 'features': ['Musical sounds', 'Activity center'] },
  { 'id': 108, 'code': 'TS604', 'name': 'Musical Shape Xylophone Bus', 'category': 'Lacing', 'type': 'toy', 'image': '', 'description': 'Bus-shaped xylophone combining transportation theme with musical learning', 'age': '2+', 'rating': 0, 'features': ['Xylophone sounds', 'Bus theme'] },
  { 'id': 109, 'code': 'TS602', 'name': 'Rainbow Ball Tower', 'category': 'Lacing', 'type': 'toy', 'image': '', 'description': 'Colorful ball tower with rainbow design for tracking and color learning', 'age': '2+', 'rating': 0, 'features': ['Rainbow colors', 'Ball tracking'] },
  { 'id': 110, 'code': 'TS789', 'name': 'Rainbow Stake Up', 'category': 'Lacing', 'type': 'toy', 'image': '', 'description': 'Rainbow-themed stacking toy for color sequencing and motor skills', 'age': '2+', 'rating': 0, 'features': ['Rainbow theme', 'Stacking skills'] },
  { 'id': 111, 'code': 'TS096', 'name': 'Round Button Lacing', 'category': 'Lacing', 'type': 'toy', 'image': '', 'description': 'Round button lacing activity for developing button fastening skills', 'age': '3+', 'rating': 0, 'features': ['Button skills', 'Round shapes'] },
  { 'id': 112, 'code': 'TS788', 'name': 'Shape Lacing', 'category': 'Lacing', 'type': 'toy', 'image': '', 'description': 'Various shape lacing cards for geometric learning and fine motor development', 'age': '3+', 'rating': 0, 'features': ['Shape learning', 'Lacing practice'] },
  { 'id': 113, 'code': 'TS790', 'name': 'Shirt Button Lacing', 'category': 'Lacing', 'type': 'toy', 'image': '', 'description': 'Shirt-themed button lacing for practical dressing skill development', 'age': '3+', 'rating': 0, 'features': ['Dressing skills', 'Practical learning'] },
  { 'id': 114, 'code': 'TS616', 'name': 'Spin & Sing Alphabet Zoo', 'category': 'Lacing', 'type': 'toy', 'image': '', 'description': 'Spinning zoo toy with alphabet songs and animal sound learning', 'age': '2+', 'rating': 0, 'features': ['Alphabet songs', 'Zoo animals'] },
  { 'id': 115, 'code': 'TS523', 'name': 'String Of Fruits Beads', 'category': 'Lacing', 'type': 'toy', 'image': '', 'description': 'Fruit-shaped beads for stringing and developing fine motor coordination', 'age': '3+', 'rating': 0, 'features': ['Fruit shapes', 'Bead stringing'] },
  { 'id': 116, 'code': 'TS601', 'name': 'Talent Blocks', 'category': 'Lacing', 'type': 'toy', 'image': '', 'description': 'Multi-talented building blocks with various activities and challenges', 'age': '3+', 'rating': 0, 'features': ['Multi-activity', 'Talent development'] },
  { 'id': 117, 'code': 'TS791', 'name': 'Tree Lacing', 'category': 'Lacing', 'type': 'toy', 'image': '', 'description': 'Tree-shaped lacing activity for nature learning and threading practice', 'age': '3+', 'rating': 0, 'features': ['Tree theme', 'Nature learning'] },
  { 'id': 118, 'code': 'TS233', 'name': 'Wooden Beat Lacing', 'category': 'Lacing', 'type': 'toy', 'image': '', 'description': 'Wooden lacing toy with rhythmic patterns and musical beat elements', 'age': '3+', 'rating': 0, 'features': ['Wooden material', 'Rhythmic patterns'] },

  // Miscellaneous Toys
  { 'id': 119, 'code': 'TS340', 'name': 'Animal Colour Track', 'category': 'Miscellaneous', 'type': 'toy', 'image': '', 'description': 'Animal-themed color tracking game for following patterns and sequences', 'age': '3+', 'rating': 0, 'features': ['Animal theme', 'Color tracking'] },
  { 'id': 120, 'code': 'TS652', 'name': 'Azul', 'category': 'Miscellaneous', 'type': 'toy', 'image': '', 'description': 'Strategic tile-laying game with beautiful patterns and tactical gameplay', 'age': '8+', 'rating': 0, 'features': ['Tile laying', 'Strategic gameplay'] },
  { 'id': 121, 'code': 'TS316', 'name': 'Bunnu Burrow', 'category': 'Miscellaneous', 'type': 'toy', 'image': '', 'description': 'Bunny-themed burrow exploration game with hiding and seeking elements', 'age': '4+', 'rating': 0, 'features': ['Bunny theme', 'Hide and seek'] },
  { 'id': 122, 'code': 'TS459', 'name': 'Calculation Shelf Abacus', 'category': 'Miscellaneous', 'type': 'toy', 'image': '', 'description': 'Traditional abacus for mathematical calculations and number concept learning', 'age': '4+', 'rating': 0, 'features': ['Mathematical tool', 'Number concepts'] },
  { 'id': 123, 'code': 'TS656', 'name': 'Catan', 'category': 'Miscellaneous', 'type': 'toy', 'image': '', 'description': 'Resource management and trading strategy game for advanced players', 'age': '10+', 'rating': 0, 'features': ['Resource management', 'Trading strategy'] },
  { 'id': 124, 'code': 'TS369', 'name': 'Chatur Kids', 'category': 'Miscellaneous', 'type': 'toy', 'image': '', 'description': 'Chess-inspired strategy game designed specifically for children', 'age': '6+', 'rating': 0, 'features': ['Chess inspired', 'Child-friendly'] },
  { 'id': 125, 'code': 'TS304', 'name': 'Checolo', 'category': 'Miscellaneous', 'type': 'toy', 'image': '', 'description': 'Checkers variant with colorful pieces and simplified rules for young players', 'age': '5+', 'rating': 0, 'features': ['Checkers variant', 'Colorful pieces'] },
  { 'id': 126, 'code': 'TS657', 'name': 'Cluedo', 'category': 'Miscellaneous', 'type': 'toy', 'image': '', 'description': 'Classic mystery-solving detective game with deduction and reasoning elements', 'age': '8+', 'rating': 0, 'features': ['Mystery solving', 'Deductive reasoning'] },
  { 'id': 127, 'code': 'TS385', 'name': 'Discover Asia', 'category': 'Miscellaneous', 'type': 'toy', 'image': '', 'description': 'Educational game exploring Asian countries, cultures, and geography', 'age': '6+', 'rating': 0, 'features': ['Asian geography', 'Cultural learning'] },
  { 'id': 128, 'code': 'TS651', 'name': 'Doodle Quest', 'category': 'Miscellaneous', 'type': 'toy', 'image': '', 'description': 'Creative drawing adventure game with quest-based artistic challenges', 'age': '5+', 'rating': 0, 'features': ['Drawing adventure', 'Creative challenges'] },
  { 'id': 129, 'code': 'TS342', 'name': 'Frog Twist & Turn', 'category': 'Miscellaneous', 'type': 'toy', 'image': '', 'description': 'Frog-themed twisting and turning toy for motor skill development', 'age': '2+', 'rating': 0, 'features': ['Frog theme', 'Motor skills'] },
  { 'id': 130, 'code': 'TS757', 'name': 'Good Habits Board Gane', 'category': 'Miscellaneous', 'type': 'toy', 'image': '', 'description': 'Educational board game teaching positive habits and social values', 'age': '5+', 'rating': 0, 'features': ['Good habits', 'Social values'] },
  { 'id': 131, 'code': 'TS135', 'name': 'Hare & Turtle Wooden Story', 'category': 'Miscellaneous', 'type': 'toy', 'image': '', 'description': 'Classic fable story toy with wooden pieces for narrative play', 'age': '3+', 'rating': 0, 'features': ['Classic fable', 'Wooden pieces'] },
  { 'id': 132, 'code': 'TS653', 'name': 'Incredible India', 'category': 'Miscellaneous', 'type': 'toy', 'image': '', 'description': 'Comprehensive game exploring Indian culture, geography, and heritage', 'age': '6+', 'rating': 0, 'features': ['Indian culture', 'Heritage learning'] },
  { 'id': 133, 'code': 'TS274', 'name': 'Jungle Lodo', 'category': 'Miscellaneous', 'type': 'toy', 'image': '', 'description': 'Jungle-themed Ludo game with wild animal pieces and adventure board', 'age': '4+', 'rating': 0, 'features': ['Jungle theme', 'Adventure board'] },
  { 'id': 134, 'code': 'TS277', 'name': 'Know India', 'category': 'Miscellaneous', 'type': 'toy', 'image': '', 'description': 'Educational game for learning about Indian states, capitals, and facts', 'age': '6+', 'rating': 0, 'features': ['Indian geography', 'Educational facts'] },
  { 'id': 135, 'code': 'TS432', 'name': 'Magnetic Animals', 'category': 'Miscellaneous', 'type': 'toy', 'image': '', 'description': 'Magnetic animal figures for creative play and magnetic force exploration', 'age': '3+', 'rating': 0, 'features': ['Magnetic animals', 'Creative play'] },
  { 'id': 136, 'code': 'TS453', 'name': 'Memory Game Fun School', 'category': 'Miscellaneous', 'type': 'toy', 'image': '', 'description': 'School-themed memory game with educational content and recall challenges', 'age': '4+', 'rating': 0, 'features': ['School theme', 'Memory development'] },
  { 'id': 137, 'code': 'TS275', 'name': 'Monopoly Junir', 'category': 'Miscellaneous', 'type': 'toy', 'image': '', 'description': 'Junior version of classic Monopoly with simplified rules and child-friendly theme', 'age': '5+', 'rating': 0, 'features': ['Simplified rules', 'Child-friendly'] },
  { 'id': 138, 'code': 'TS295', 'name': 'Never Ending Stories', 'category': 'Miscellaneous', 'type': 'toy', 'image': '', 'description': 'Storytelling game with endless narrative possibilities and creative elements', 'age': '5+', 'rating': 0, 'features': ['Storytelling', 'Creative narratives'] },
  { 'id': 139, 'code': 'TS245', 'name': 'Pattern Play', 'category': 'Miscellaneous', 'type': 'toy', 'image': '', 'description': 'Pattern recognition and creation game for developing visual perception skills', 'age': '4+', 'rating': 0, 'features': ['Pattern recognition', 'Visual perception'] },
  { 'id': 140, 'code': 'TS303', 'name': 'Quiz Time 1', 'category': 'Miscellaneous', 'type': 'toy', 'image': '', 'description': 'First level quiz game with age-appropriate questions and learning content', 'age': '5+', 'rating': 0, 'features': ['Quiz format', 'Age-appropriate'] },
  { 'id': 141, 'code': 'TS301', 'name': 'Quiz Time Part 2', 'category': 'Miscellaneous', 'type': 'toy', 'image': '', 'description': 'Advanced quiz game with challenging questions for continued learning', 'age': '6+', 'rating': 0, 'features': ['Advanced level', 'Challenging questions'] },
  { 'id': 142, 'code': 'TS199', 'name': 'Quiz Time Senior', 'category': 'Miscellaneous', 'type': 'toy', 'image': '', 'description': 'Senior level quiz game with complex questions for older children', 'age': '8+', 'rating': 0, 'features': ['Senior level', 'Complex questions'] },
  { 'id': 143, 'code': 'TS319', 'name': 'River Crossing', 'category': 'Miscellaneous', 'type': 'toy', 'image': '', 'description': 'Logic puzzle game involving river crossing challenges and strategic thinking', 'age': '6+', 'rating': 0, 'features': ['Logic puzzle', 'Strategic thinking'] },
  { 'id': 144, 'code': 'TS531', 'name': 'Scoop Stake Up', 'category': 'Miscellaneous', 'type': 'toy', 'image': '', 'description': 'Scooping and stacking activity toy for coordination and motor skill development', 'age': '3+', 'rating': 0, 'features': ['Scooping action', 'Stacking skills'] },
  { 'id': 145, 'code': 'TS201', 'name': 'Shape Ball', 'category': 'Miscellaneous', 'type': 'toy', 'image': '', 'description': 'Ball with various shapes for rolling, throwing, and shape recognition games', 'age': '2+', 'rating': 0, 'features': ['Shape recognition', 'Ball play'] },
  { 'id': 146, 'code': 'TS310', 'name': 'Shoping Plaza', 'category': 'Miscellaneous', 'type': 'toy', 'image': '', 'description': 'Shopping-themed role-play game with market scenarios and transaction learning', 'age': '4+', 'rating': 0, 'features': ['Role-play', 'Shopping simulation'] },
  { 'id': 147, 'code': 'TS461', 'name': 'Three In One Musical Board', 'category': 'Miscellaneous', 'type': 'toy', 'image': '', 'description': 'Triple-function musical board with multiple instruments and sound activities', 'age': '3+', 'rating': 0, 'features': ['Triple function', 'Musical instruments'] },
  { 'id': 148, 'code': 'TS269', 'name': 'Tom & Jerry Chase Game', 'category': 'Miscellaneous', 'type': 'toy', 'image': '', 'description': 'Classic cartoon-themed chase game with Tom and Jerry characters', 'age': '4+', 'rating': 0, 'features': ['Cartoon theme', 'Chase mechanics'] },
  { 'id': 149, 'code': 'TS290', 'name': 'Under The Sea', 'category': 'Miscellaneous', 'type': 'toy', 'image': '', 'description': 'Ocean exploration game with marine life and underwater adventure themes', 'age': '4+', 'rating': 0, 'features': ['Ocean theme', 'Marine life'] },
  { 'id': 150, 'code': 'TS454', 'name': 'Word Building Spelling Game', 'category': 'Miscellaneous', 'type': 'toy', 'image': '', 'description': 'Spelling and word construction game for vocabulary and language development', 'age': '5+', 'rating': 0, 'features': ['Vocabulary building', 'Spelling practice'] },

  // Musical Toys
  { 'id': 151, 'code': 'TS810', 'name': 'Air Ball', 'category': 'Musical', 'type': 'toy', 'image': '', 'description': 'Floating ball toy with air stream and musical sound effects', 'age': '3+', 'rating': 0, 'features': ['Floating action', 'Musical sounds'] },
  { 'id': 152, 'code': 'TS220', 'name': 'Black Drum', 'category': 'Musical', 'type': 'toy', 'image': '', 'description': 'Classic black drum for rhythm development and musical expression', 'age': '3+', 'rating': 0, 'features': ['Rhythm development', 'Musical expression'] },
  { 'id': 153, 'code': 'TS805', 'name': 'Cargo Mini Train', 'category': 'Musical', 'type': 'toy', 'image': '', 'description': 'Mini cargo train with realistic sounds and moving parts', 'age': '2+', 'rating': 0, 'features': ['Train sounds', 'Moving parts'] },
{ 'id': 154, 'code': 'TS249', 'name': 'Chomp Diano', 'category': 'Musical', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 155, 'code': 'TS538', 'name': 'Cute Rabbit Musical Piano', 'category': 'Musical', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 156, 'code': 'TS812', 'name': 'Drum With Shapes', 'category': 'Musical', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 157, 'code': 'TS887', 'name': 'English Learner Blue Laptop', 'category': 'Musical', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 158, 'code': 'TS905', 'name': 'Face Off Bee', 'category': 'Musical', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 159, 'code': 'TS218', 'name': 'Faster Feet Master Mind', 'category': 'Musical', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 160, 'code': 'TS513', 'name': 'Go Go Fishing', 'category': 'Musical', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 161, 'code': 'TS804', 'name': 'Indian Mini Passenger Train', 'category': 'Musical', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 162, 'code': 'TS530', 'name': 'Learning Smart Phone', 'category': 'Musical', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 163, 'code': 'TS285', 'name': 'Loco Engine With Blocks', 'category': 'Musical', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 164, 'code': 'TS280', 'name': 'Musical Camera', 'category': 'Musical', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 165, 'code': 'TS808', 'name': 'Musical Drum', 'category': 'Musical', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 166, 'code': 'TS902', 'name': 'Musical Drum 3 In 1', 'category': 'Musical', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 167, 'code': 'TS811', 'name': 'Musical Mat', 'category': 'Musical', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 168, 'code': 'TS813', 'name': 'Musical Telephone', 'category': 'Musical', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 169, 'code': 'TS803', 'name': 'Musical Train Pull Along', 'category': 'Musical', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 170, 'code': 'TS834', 'name': 'Musical Walker', 'category': 'Musical', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 171, 'code': 'TS244', 'name': 'My Pal Violet', 'category': 'Musical', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 172, 'code': 'TS814', 'name': 'My Rainbow  Block Xylophone', 'category': 'Musical', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 173, 'code': 'TS427', 'name': 'My Study Book', 'category': 'Musical', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 174, 'code': 'TS452', 'name': 'Passenger Train Big', 'category': 'Musical', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 175, 'code': 'TS509', 'name': 'Paw Petrol Remote Car', 'category': 'Musical', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 176, 'code': 'TS542', 'name': 'Robot', 'category': 'Musical', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 177, 'code': 'TS901', 'name': 'Thomas Track Train Big', 'category': 'Musical', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 178, 'code': 'TS806', 'name': 'Thomas Train', 'category': 'Musical', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 179, 'code': 'TS807', 'name': 'V-Tech Mini Laptop', 'category': 'Musical', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 180, 'code': 'TS809', 'name': 'Y-Pad', 'category': 'Musical', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 181, 'code': 'TS655', 'name': 'Scrabble Junior', 'category': 'Phonics Game', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 182, 'code': 'TS816', 'name': 'Abc Mat', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 183, 'code': 'TS817', 'name': 'Abc Mat With Pictures', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 184, 'code': 'TS541', 'name': 'Activity Cube', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 185, 'code': 'TS836', 'name': 'Air Hockey', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 186, 'code': 'TS832', 'name': 'Baby Roller With Ball', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 187, 'code': 'TS761', 'name': 'Baby Snooker', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 188, 'code': 'TS818', 'name': 'Balancing Ball', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 189, 'code': 'TS879', 'name': 'Ball Game', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 190, 'code': 'TS360', 'name': 'Bed Bugs', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 191, 'code': 'TS256', 'name': 'Big Ouch Marble Game', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 192, 'code': 'TS207', 'name': 'Bouncing Roof', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 193, 'code': 'TS881', 'name': 'Button It 1', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 194, 'code': 'TS882', 'name': 'Button It 2', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 195, 'code': 'TS819', 'name': 'Dragster', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 196, 'code': 'TS830', 'name': 'Dump Truck', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 197, 'code': 'TS466', 'name': 'Eduage Writing Pattern', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 198, 'code': 'TS786', 'name': 'Fruit Vegetables Cutting Basket', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 199, 'code': 'TS867', 'name': 'Fruits Vegetables', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 200, 'code': 'TS380', 'name': 'Gems Mosaic', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 201, 'code': 'TS354', 'name': 'Guess The Zoo', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 202, 'code': 'TS911', 'name': 'Hammering Fun', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 203, 'code': 'TS878', 'name': 'Hand & Finger Puppet', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 204, 'code': 'TS760', 'name': 'Hats Off', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 205, 'code': 'TS157', 'name': 'Head Benz', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 206, 'code': 'TS904', 'name': 'Hide & Seek Jungle', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 207, 'code': 'TS283', 'name': 'Hposcotch', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 208, 'code': 'TS395', 'name': 'Humpty Dumpty Spinner', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 209, 'code': 'TS524', 'name': 'Hungry Frog', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 210, 'code': 'TS470', 'name': 'Hungry Monster', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 211, 'code': 'TS467', 'name': 'Learnih Blocks Wooden', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 212, 'code': 'TS018', 'name': 'Ludo', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 213, 'code': 'TS465', 'name': 'Magna Tab', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 214, 'code': 'TS251', 'name': 'Make A Noise Mechanical Gear', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 215, 'code': 'TS886', 'name': 'Match 21/X & O', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 216, 'code': 'TS759', 'name': 'Match It Shapes', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 217, 'code': 'TS910', 'name': 'Memory Alphabet & Numbers', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 218, 'code': 'TS833', 'name': 'Mis Vehicales Car', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 219, 'code': 'TS877', 'name': 'Multi Function Wooden Zenga Puzzle', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 220, 'code': 'TS390', 'name': 'Mushroom Nails', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 221, 'code': 'TS824', 'name': 'Musical Activity Box', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 222, 'code': 'TS468', 'name': 'My First Car', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 223, 'code': 'TS829', 'name': 'Oil Tanker', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 224, 'code': 'TS785', 'name': 'Pastry Cutting', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 225, 'code': 'TS529', 'name': 'Pen Connectin', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 226, 'code': 'TS537', 'name': 'Penguine Ice Breaker', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 227, 'code': 'TS820', 'name': 'Pitcher Power Shot', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 228, 'code': 'TS540', 'name': 'Pizza Party', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 229, 'code': 'TS906', 'name': 'Pop Up Girraffe', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 230, 'code': 'TS828', 'name': 'Pull Along Lady Bug', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 231, 'code': 'TS880', 'name': 'Pyramid Ball Puzzle', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 232, 'code': 'TS469', 'name': 'Ramp Tower', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 233, 'code': 'TS740', 'name': 'Rhyme Time', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 234, 'code': 'TS826', 'name': 'Ring Toss Elephant', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 235, 'code': 'TS821', 'name': 'Ring Toss Spiderman', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 236, 'code': 'TS392', 'name': 'Roller Ball', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 237, 'code': 'TS884', 'name': 'Rotating Gear Jigsaw  Puzzle', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 238, 'code': 'TS435', 'name': 'Scotch Mat', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 239, 'code': 'TS458', 'name': 'Shape Shuffle', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 240, 'code': 'TS336', 'name': 'Sliding Cars', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 241, 'code': 'TS823', 'name': 'Spider Man Gun', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 242, 'code': 'TS883', 'name': 'Spinning Joy', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 243, 'code': 'TS822', 'name': 'Spiral Ball Monkey', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 244, 'code': 'TS827', 'name': 'Spiral Fun', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 245, 'code': 'TS472', 'name': 'Story Puzzle', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 246, 'code': 'TS456', 'name': 'Strike The Wood', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 247, 'code': 'TS726', 'name': 'Sudoku Mini', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 248, 'code': 'TS473', 'name': 'Table Tennis', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 249, 'code': 'TS457', 'name': 'Topple Up', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 250, 'code': 'TS885', 'name': 'Twister', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 251, 'code': 'TS471', 'name': 'V-Tech Go Guarsage', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 252, 'code': 'TS835', 'name': 'Walker With Blocks', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 253, 'code': 'TS386', 'name': 'Wall Hen Game', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 254, 'code': 'TS258', 'name': 'Wooden Stale Up/Hammer Ball', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 255, 'code': 'TS876', 'name': 'Wooden Zenga', 'category': 'Playing', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 256, 'code': 'TS875', 'name': 'Animal 2', 'category': 'Pretend', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 257, 'code': 'TS874', 'name': 'Animals 1', 'category': 'Pretend', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 258, 'code': 'TS787', 'name': 'Doctors Clinic', 'category': 'Pretend', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 259, 'code': 'TS831', 'name': 'My Doggy With Skates', 'category': 'Pretend', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 260, 'code': 'TS040', 'name': 'V Tech Super Market', 'category': 'Pretend', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 261, 'code': 'TS866', 'name': 'Aquatic Animal', 'category': 'Pretend Toy', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 262, 'code': 'TS857', 'name': 'Parking Lot', 'category': 'Pretend Toy', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 263, 'code': 'TS574', 'name': '3D Puzzle (Bee\\Honey Bee)', 'category': 'Puzzle', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 264, 'code': 'TS573', 'name': '3D Puzzle(Frog\\Frog))', 'category': 'Puzzle', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 265, 'code': 'TS572', 'name': '3D Puzzle(Squirrel\\Camel)', 'category': 'Puzzle', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 266, 'code': 'TS484', 'name': 'Abc Big & Small Wooden', 'category': 'Puzzle', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 267, 'code': 'TS476', 'name': 'Animal Word Pizzle', 'category': 'Puzzle', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 268, 'code': 'TS577', 'name': 'Ball Game', 'category': 'Puzzle', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 269, 'code': 'TS477', 'name': 'Cake Beauty Goofers', 'category': 'Puzzle', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 270, 'code': 'TS654', 'name': 'Discover India 29 States Puzzle', 'category': 'Puzzle', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 271, 'code': 'TS482', 'name': 'Electronic Key Board', 'category': 'Puzzle', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 272, 'code': 'TS083', 'name': 'Floor Transport Puzzle', 'category': 'Puzzle', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 273, 'code': 'TS483', 'name': 'Happy Land Tray', 'category': 'Puzzle', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 274, 'code': 'TS475', 'name': 'Intellectual Bead Box', 'category': 'Puzzle', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 275, 'code': 'TS583', 'name': 'Number Match', 'category': 'Puzzle', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 276, 'code': 'TS478', 'name': 'Number Train', 'category': 'Puzzle', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 277, 'code': 'TS578', 'name': 'Opposite  3', 'category': 'Puzzle', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 278, 'code': 'TS481', 'name': 'Our Helpers  Mat', 'category': 'Puzzle', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 279, 'code': 'TS580', 'name': 'Our Helpers  Mat', 'category': 'Puzzle', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 280, 'code': 'TS575', 'name': 'Rhyming Words', 'category': 'Puzzle', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 281, 'code': 'TS480', 'name': 'Seasons Mat', 'category': 'Puzzle', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 282, 'code': 'TS576', 'name': 'Sentence Builder', 'category': 'Puzzle', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 283, 'code': 'TS581', 'name': 'Shadow Matching  Wooden', 'category': 'Puzzle', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 284, 'code': 'TS584', 'name': 'Ship Shape', 'category': 'Puzzle', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 285, 'code': 'TS582', 'name': 'Sort In Boc', 'category': 'Puzzle', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 286, 'code': 'TS474', 'name': 'Spider ,Msn Puzzle', 'category': 'Puzzle', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 287, 'code': 'TS579', 'name': 'Time Match', 'category': 'Puzzle', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 288, 'code': 'TS479', 'name': 'Transport Mat', 'category': 'Puzzle', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 289, 'code': 'TS485', 'name': 'Wash Up Kitchen', 'category': 'Puzzle', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 290, 'code': 'TS794', 'name': 'Cactus Stake Up', 'category': 'Stake Up', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 291, 'code': 'TS801', 'name': 'Egg/Shape/Beeker Stake Up', 'category': 'Stake Up', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 292, 'code': 'TS525', 'name': 'Fruit Pile Up Tower', 'category': 'Stake Up', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 293, 'code': 'TS793', 'name': 'Link Up', 'category': 'Stake Up', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 294, 'code': 'TS796', 'name': 'Link Uphapes', 'category': 'Stake Up', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 295, 'code': 'TS792', 'name': 'Nuts & Bolt', 'category': 'Stake Up', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 296, 'code': 'TS800', 'name': 'Posting Challenge', 'category': 'Stake Up', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 297, 'code': 'TS797', 'name': 'Shape Tile 6', 'category': 'Stake Up', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 298, 'code': 'TS798', 'name': 'Shape Train', 'category': 'Stake Up', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 299, 'code': 'TS799', 'name': 'Stale High', 'category': 'Stake Up', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 300, 'code': 'TS802', 'name': 'Wonder Ball', 'category': 'Stake Up', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 301, 'code': 'TS795', 'name': 'Wooden Make A Shape Tray', 'category': 'Stake Up', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 302, 'code': 'TS410', 'name': 'Guessing', 'category': 'Vehicle', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 303, 'code': 'TS408', 'name': 'Monster Army Jeep', 'category': 'Vehicle', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 304, 'code': 'TS764', 'name': '1 To 10', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 305, 'code': 'TS504', 'name': '1 To 10  With Signs', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 306, 'code': 'TS505', 'name': '1 To 20 Tray', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 307, 'code': 'TS780', 'name': '1 To 9 Carving', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 308, 'code': 'TS556', 'name': '3 Piece Puzzle', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 309, 'code': 'TS567', 'name': '3 Puzzles (Submarine/Grapes/Mango)', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 310, 'code': 'TS565', 'name': '6 In 1 Vehicle', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 311, 'code': 'TS767', 'name': 'Abc Capital Tray', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 312, 'code': 'TS776', 'name': 'Abc Carving', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 313, 'code': 'TS547', 'name': 'Abc Turttle', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 314, 'code': 'TS564', 'name': 'Airways & Water Ways', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 315, 'code': 'TS551', 'name': 'Animal Body Parts', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 316, 'code': 'TS553', 'name': 'Animal Cursive', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 317, 'code': 'TS003', 'name': 'Beat Trail Ball', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 318, 'code': 'TS005', 'name': 'Beat Trail Big', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 319, 'code': 'TS006', 'name': 'Beat Trail Small', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 320, 'code': 'TS560', 'name': 'Big Button Lacing', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 321, 'code': 'TS552', 'name': 'Bingo Bus', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 322, 'code': 'TS037', 'name': 'Birthday Party', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 323, 'code': 'TS403', 'name': 'Body Parts', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 324, 'code': 'TS774', 'name': 'Carving 1', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 325, 'code': 'TS839', 'name': 'Classfication Blocks', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 326, 'code': 'TS557', 'name': 'Classification Box 2', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 327, 'code': 'TS036', 'name': 'Community Helpers', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 328, 'code': 'TS779', 'name': 'Cool Summer Night', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 329, 'code': 'TS226', 'name': 'Creative Animal Puzzle', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 330, 'code': 'TS772', 'name': 'Dinousaur Tray', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 331, 'code': 'TS771', 'name': 'Domestic Animal Tray', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 332, 'code': 'TS063', 'name': 'Dress Up Girl', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 333, 'code': 'TS154', 'name': 'Farm Magnetic Tray', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 334, 'code': 'TS778', 'name': 'Find The Path', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 335, 'code': 'TS077', 'name': 'Flag Domino', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 336, 'code': 'TS078', 'name': 'Flower Tray', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 337, 'code': 'TS035', 'name': 'Foot Counting Number Tray', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 338, 'code': 'TS783', 'name': 'Frog Tanagram', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 339, 'code': 'TS512', 'name': 'Fruit Tray 1', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 340, 'code': 'TS769', 'name': 'Fruit Tray 2', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 341, 'code': 'TS510', 'name': 'Fruit Tray 3', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 342, 'code': 'TS045', 'name': 'Fun Geo Shapes', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 343, 'code': 'TS568', 'name': 'Geometric Snowflakes', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 344, 'code': 'TS017', 'name': 'Gujarati Vowels', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 345, 'code': 'TS061', 'name': 'Hidi Barakhadi', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 346, 'code': 'TS141', 'name': 'Hindi Carving', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 347, 'code': 'TS784', 'name': 'Hot & Bright Day', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 348, 'code': 'TS074', 'name': 'House /Rabbit Puzzle', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 349, 'code': 'TS765', 'name': 'India Map', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 350, 'code': 'TS511', 'name': 'Junior Identificatin Fruit Tray I', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 351, 'code': 'TS763', 'name': 'King Size Identification Try Fruit', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 352, 'code': 'TS085', 'name': 'Make  Eight', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 353, 'code': 'TS555', 'name': 'Make & Roll', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 354, 'code': 'TS777', 'name': 'Make A Fish', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 355, 'code': 'TS550', 'name': 'Mellisa & Dey Farm Animals', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 356, 'code': 'TS013', 'name': 'Multi Colour Wooden Castle', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 357, 'code': 'TS781', 'name': 'Multifunctional Tray', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 358, 'code': 'TS048', 'name': 'Musical Instrument', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 359, 'code': 'TS064', 'name': 'My Number Duck', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 360, 'code': 'TS058', 'name': 'My Room Magnetic', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 361, 'code': 'TS569', 'name': 'Number Count', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 362, 'code': 'TS076', 'name': 'Number Counting Tray', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 363, 'code': 'TS566', 'name': 'Opposite Wooden', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 364, 'code': 'TS032', 'name': 'Parrot 1-20 Puzzle', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 365, 'code': 'TS558', 'name': 'Peel A Boo Clever Cubes', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 366, 'code': 'TS153', 'name': 'Police Magnetic Tray', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 367, 'code': 'TS782', 'name': 'Rabbit Tanagram', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 368, 'code': 'TS563', 'name': 'Roadways Vehicles', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 369, 'code': 'TS561', 'name': 'Round Button 2', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 370, 'code': 'TS559', 'name': 'Shape Small Beads', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 371, 'code': 'TS515', 'name': 'Skillofun Birds Ii Junior', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 372, 'code': 'TS503', 'name': 'Skillofun Fruits Ii', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 373, 'code': 'TS506', 'name': 'Skillofun Geo Shapes', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 374, 'code': 'TS762', 'name': 'Small Abc', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 375, 'code': 'TS516', 'name': 'Small Abc 2', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 376, 'code': 'TS016', 'name': 'Small Abc With Pictures', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 377, 'code': 'TS775', 'name': 'Solar System', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 378, 'code': 'TS051', 'name': 'Spelling Parts Of The Body', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 379, 'code': 'TS007', 'name': 'Sports Tray', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 380, 'code': 'TS134', 'name': 'Thirsty Crow Story Wooden', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 381, 'code': 'TS031', 'name': 'Train /Tiger Puzzle', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 382, 'code': 'TS507', 'name': 'Water Animal Ii', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 383, 'code': 'TS770', 'name': 'Wild Animal Tray', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 384, 'code': 'TS768', 'name': 'Wild Animals', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 385, 'code': 'TS837', 'name': 'Wooden Cutout Vehicles', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 386, 'code': 'TS012', 'name': 'Wooden Heroes Castle', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 387, 'code': 'TS562', 'name': 'Wooden Veg.Cutting', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 388, 'code': 'TS554', 'name': 'Word Pick Oxford', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 389, 'code': 'TS570', 'name': 'Zoom Out Animal', 'category': 'Wooden', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] },
{ 'id': 390, 'code': 'TS055', 'name': 'Winnie The Pooh', 'category': 'Wooden Puzzle', 'type': 'toy', 'image': '', 'description': '', 'age': '', 'rating': 0, 'features': [] }];

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.code.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-pink-50 to-orange-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-pink-600 mb-10">
          Explore Our Toy Collection
        </h1>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-10">
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by name or code..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 text-sm shadow-sm"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full sm:w-auto px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 text-sm shadow-sm"
          >
            <option value="all">All Categories</option>
            {toyCategories.map((cat, idx) => (
              <option key={idx} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: product.id * 0.02 }}
              className="bg-white rounded-2xl shadow-lg p-4 flex flex-col hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full aspect-square bg-gray-100 rounded-xl mb-4 overflow-hidden">
                <img
  src={getProductImagePath(product.code)}
  onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x300?text=No+Image'; }}
  alt={product.name}
  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
/>

              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1 truncate">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-1">Code: {product.code}</p>
              <p className="text-sm text-pink-600 font-semibold mb-3">{product.category}</p>
              <button
                onClick={() =>
                  window.open(`https://wa.me/917900197763?text=${encodeURIComponent(`Hi! I'm interested in "${product.name}" from TOY STATION.`)}`, '_blank')
                }
                className="mt-auto bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-md transition-all duration-300"
              >
                Ask About This
              </button>
            </motion.div>
          ))}
        </div>

        {/* No Products Found */}
        {filteredProducts.length === 0 && (
          <div className="text-center mt-16 text-gray-500 text-lg">
            No matching products found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
