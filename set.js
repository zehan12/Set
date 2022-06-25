class Set {
  constructor( arr ) {
    this.arr = arr;
  }
  
  add( val ) {
    for ( let i = 0 ; i < this.arr.length ; i++ ) {
       if ( !this.has( val ) ) return this.arr.push( val )
    }
  }
  
  delete( val ) {
   let newArr = [];
    for ( let i = 0 ; i < this.arr.length ; i++ ) {
        if ( this.arr[i] !== val ) {
           newArr.push( this.arr[i] )
        }
    } 
    return this.arr = newArr;
  }
  
  has( val ) {
   for ( let i = 0 ; i < this.arr.length ; i++ ) {
        if ( this.arr[ i ] === val ) {
            return true;
        } 
    }
    return false;
  }
  
  get size( ){
    return this.arr.length;
  }
  
  
}
