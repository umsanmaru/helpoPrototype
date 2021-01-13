let instanceCount = 0;

function create() {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('id', `ekoembed-${++instanceCount}`);
    iframe.style.display = 'none';
    return iframe;
}

export default { create };
