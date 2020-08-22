function toInitials (name) {
    let array = name.split(' ')
    let initials = ''
    for (let i = 0; i < array.length; i++) {
      if (array[i].length > 0 && array[i] !== '') {
        initials += array[i][0].toUpperCase().concat('.');
      }
    }
    return initials
  }
  console.log(toInitials('matias bruschtein'))