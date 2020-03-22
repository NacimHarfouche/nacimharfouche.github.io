

/**
 * at the launch of the page
 */
$(() => {
    let linkBlanks = document.querySelectorAll('a[target*=blank]');
    if (linkBlanks.length === 0) return;
    for (let link of linkBlanks ) {
        if (!/noopener/i.test(link.rel)) link.rel += " noopener";
        if (!/noreferrer/i.test(link.rel)) link.rel += " noreferrer";
        if (link.rel[0] === " ") link.rel = link.rel.slice(1);
    }

    $("section").addClass("rounded");

	/**
	 * footer
	 */
	$('footer').html(`<p class="text-center">© 2019, All Rights Reserved - 
	<a href="https://github.com/NacimHarfouche" target="_blank" rel="noopener noreferrer">Nacim Harfouche</a>
	<a href="https://twitter.com/ArtesEveni" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
	<a href="https://www.linkedin.com/in/nacim-harfouche-912b14125/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
	</p>`);
});