

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
});