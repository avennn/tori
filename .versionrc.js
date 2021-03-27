module.exports = {
    header: 'tori',
    types: [
        { type: 'feat', section: 'Feature' },
        { type: 'fix', section: 'Bug Fix' },
        { type: 'refactor', section: 'Refactor' },
        { type: 'perf', section: 'Improve && Enhancement' },
        { type: 'chore', hidden: true },
        { type: 'docs', hidden: true },
        { type: 'style', hidden: true },
        { type: 'test', hidden: true },
        { type: 'build', hidden: true },
        { type: 'ci', hidden: true },
        { type: 'revert', hidden: true },
    ],
    commitUrlFormat: 'https://github.com/avennn/tori/commit/{{hash}}',
    issueUrlFormat: 'https://github.com/avennn/tori/issues/{{id}}',
    compareUrlFormat:
        'https://github.com/avennn/tori/compare/{{previousTag}}...{{currentTag}}',
};
