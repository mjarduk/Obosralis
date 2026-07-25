const toBeRemoved = [ "tacz:gun_smith_table", "tacz:workbench_a", "tacz:workbench_c" ]

ServerEvents.recipes(event => {
  for (const i of toBeRemoved) {
    event.remove({
      output: i
    })
  }
})
