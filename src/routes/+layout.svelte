<script lang="ts">
  import BackgroudGrid from '../components/common/backgroud-grid.svelte';
  import Navbar from '../components/navbar.svelte';
  import { generateGrid, getMobileSize } from '../utils';
  import './styles.css';
</script>


<Navbar />
<BackgroudGrid>
  <slot />
</BackgroudGrid>

