<!-- script -->
<script>
  import Desktop from '../ui/macro/desktop.svelte'
  import FolderDesktop from '../ui/components/desktop/folder.desktop.svelte'
  import NotepadDesktop from '../ui/components/desktop/notepad.desktop.svelte'
  import Settings from '../ui/micro/settings.svelte'
</script>

<!-- template -->
<Desktop>
  <FolderDesktop
    uniqueId={0}
    text="projects.dir"
    mainColor="#312454"
    modalWidth="550px"
    modalHeight="450px"
    modalTop="20%"
    modalLeft="40%"
  />
  <Settings />
  <NotepadDesktop
    uniqueId={2}
    text="todo.md"
  />
  <NotepadDesktop
    uniqueId={3}
    text="tutorial.text"
    modalWidth="475px"
    modalHeight="470px"
    modalTop="30%"
    modalLeft="50%"
  />
</Desktop>
