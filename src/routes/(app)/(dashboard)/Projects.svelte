<script>
    import { projects } from "@lib/accountancy/store";
</script>

<div class="panel p-4">
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
