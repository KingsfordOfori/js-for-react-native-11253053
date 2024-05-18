function createUserProfiles(names, modifiedNames) {
    let userProfiles = [];
    let id = 1;
}for (let i = 0; i < names.length; i++) {
    let userProfile = {
      originalName: names[i],
      modifiedName: modifiedNames[i],
      id: id++
    };
    userProfiles.push(userProfile);
  }
  return userProfiles;
}

// Example usage:
let names = ["Janet", "Bismark", "Kingsford", "Doris"];
let modifiedNames = ["JANET", "bismark", "KINGSFORD", "doris"];
let profiles = createUserProfiles(names, modifiedNames);
console.log(profiles);
