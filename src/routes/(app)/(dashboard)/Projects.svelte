<script>
    import { projects } from "./store";
</script>

<div class="panel p-4">
    {#if $projects.length === 0}
        <div class="flex-centered p-5">
            <span class="has-text-grey">No projects</span>
        </div>
    {/if}
    {#each $projects as project}
        <a class="panel-block" href="#">
            <div class="is-fullwidth">
                <span>{project.name}</span>
                <progress
                    class="progress mb-0"
                    value={project.progress}
                    max="1"
                />
            </div>
        </a>
    {/each}
</div>
