function greet(Kind: number | string) {
  if ( typeof Kind === 'string') {
    return `Chai Aur ${Kind}`
  }
  return `Number is ${Kind}`
}

function serveChai(msg? :string) {
  if (msg) {
    return `chai is serve ${msg}`
  }
  return 'chai is Not serve'
}

function orderchai(size: 'small' | 'medium' | 'large'| number) {
  if (size === 'small') {
    return 'order small cutting chai'
  }
  if (size === 'medium' || size === 'large') {
    return 'too Extra Chai'
  }
  return `number of chai is #${size}`
}


class kulhadChai{
  serve() {
    return 'serving kulhad Chai';
  }
}

class cuttingChai{
  serve() {
    return 'serving Cutting Chai';
  }
}


function serve(chai: kulhadChai | cuttingChai) {
  if (chai instanceof kulhadChai) {
    return chai.serve()
  }
}
