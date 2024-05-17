function getGrade (s1, s2, s3) {
    
    let res = (s1 + s2 + s3) / 3;

    if(res >= 90) {
        return 'A';
    } else if(res >= 80) {
        return 'B';
    } else if(res >= 70) {
        return 'C';
    } else if(res >= 60) {
        return 'D';
    } else if(res >= 0) {
        return 'F';
    }
  }

  console.log(getGrade(70,70,100));