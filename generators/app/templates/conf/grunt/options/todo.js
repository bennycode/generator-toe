module.exports = {
  options: {
    marks: [
      {
        name: "FIX",
        pattern: /FIXME/,
        color: "red"
      },
      {
        name: "NOTE",
        pattern: /NOTE/,
        color: "blue"
      },
      {
        name: "PENDING",
        pattern: /XXX/,
        color: "blue"
      },
      {
        name: "TODO",
        pattern: /TODO/,
        color: "yellow"
      },
      {
        name: "XXX",
        pattern: /XXX/,
        color: "red"
      }
    ]
  },
  src: [
    '<%= dir.src_helper %>/**/*',
    '<%= dir.src_main %>/**/*',
    '<%= dir.src_test %>/**/*'
  ]
};
