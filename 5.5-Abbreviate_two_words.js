function toInitials (name) {
    let parts = name.split(' ')
    var initials = ''
    for (let i = 0; i < parts.length; i++) {
      if (parts[i].length > 0 && parts[i] !== '') {
        initials += parts[i][0].toUpperCase();
      }
    }
    return initials
  }
  console.log(toInitials('matias bruschtein'))