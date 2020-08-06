export const CNS = {
  called: [],
  emit: (name, msg = undefined) => {
    if (typeof msg == "undefined") {
      CNS.called.push(name);
    }
  },
  on: (name, cb) => {
    setInterval(() => {
      if (CNS.called.includes(name)) {
        cb();
        CNS.called.splice(CNS.called.indexOf(name), 1);
      }
    }, 10);
  }
};
