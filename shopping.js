function shoppingEid(
  rabiul,
  arjina,
  rasel,
  shikha,
  sumir,
  ambia,
  anju,
  nishan,
  nipun,
  saira,
  internet,
  donation,
) {
  let total =
    rabiul +
    arjina +
    rasel +
    ambia +
    shikha +
    sumir +
    nishan +
    anju +
    nipun +
    saira +
    internet +
    donation;
  const totalTk = parseInt(total);
  const remaining = (total % 1) * 1000;

  return `So, the money needed to shop for Eid is ${totalTk}k tk and ${remaining} tk `;
}
const values = shoppingEid(1, 1, 2.5, 2, 1, 1, 1.5, 1, 0.5, 0.5, 0.5, 1);
console.log(values);
