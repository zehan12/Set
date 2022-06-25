#Set
The Set object lets you store unique values of any type, whether primitive values or object references.

#Description
Set objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection.

#Value equality
Because each value in the Set has to be unique, the value equality will be checked. In an earlier version of ECMAScript specification, this was not based on the same algorithm as the one used in the === operator. Specifically, for Sets, +0 (which is strictly equal to -0) and -0 were different values. However, this was changed in the ECMAScript 2015 specification. See "Key equality for -0 and 0" in the browser compatibility table for details.

NaN and undefined can also be stored in a Set. All NaN values are equated (i.e. NaN is considered the same as NaN, even though NaN !== NaN).

#Performance
The Set has method checks if a value is in a Set object, using an approach that is, on average, quicker than testing most of the elements that have previously been added to the Set object. In particular, it is, on average, faster than the Array.prototype.includes method when an Array object has a length equal to a Set object's size.


