export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <h1>Claude Code</h1>
        <p>Your AI-powered coding assistant with comprehensive capabilities for software development</p>
      </header>

      <div className="capabilities">
        <div className="card">
          <div className="card-icon">💻</div>
          <h2>Code Generation</h2>
          <ul>
            <li>Write complete applications from scratch</li>
            <li>Generate full-stack web applications</li>
            <li>Create React, Next.js, Vue projects</li>
            <li>Build REST APIs and backends</li>
            <li>Implement complex algorithms</li>
          </ul>
        </div>

        <div className="card">
          <div className="card-icon">🔧</div>
          <h2>Code Editing</h2>
          <ul>
            <li>Refactor existing codebases</li>
            <li>Fix bugs and errors</li>
            <li>Add new features to projects</li>
            <li>Optimize performance</li>
            <li>Update dependencies</li>
          </ul>
        </div>

        <div className="card">
          <div className="card-icon">🔍</div>
          <h2>Code Analysis</h2>
          <ul>
            <li>Search through codebases</li>
            <li>Explain complex code</li>
            <li>Review code quality</li>
            <li>Identify security issues</li>
            <li>Debug problems</li>
          </ul>
        </div>

        <div className="card">
          <div className="card-icon">🚀</div>
          <h2>Deployment</h2>
          <ul>
            <li>Deploy to Vercel automatically</li>
            <li>Set up CI/CD pipelines</li>
            <li>Configure cloud services</li>
            <li>Manage Docker containers</li>
            <li>Handle production builds</li>
          </ul>
        </div>

        <div className="card">
          <div className="card-icon">🗄️</div>
          <h2>Database Operations</h2>
          <ul>
            <li>Design database schemas</li>
            <li>Write SQL queries</li>
            <li>Set up ORMs (Prisma, TypeORM)</li>
            <li>Manage migrations</li>
            <li>Optimize database performance</li>
          </ul>
        </div>

        <div className="card">
          <div className="card-icon">🔗</div>
          <h2>Git & Version Control</h2>
          <ul>
            <li>Create commits with best practices</li>
            <li>Manage branches</li>
            <li>Create pull requests</li>
            <li>Resolve merge conflicts</li>
            <li>Review git history</li>
          </ul>
        </div>

        <div className="card">
          <div className="card-icon">🧪</div>
          <h2>Testing</h2>
          <ul>
            <li>Write unit tests (Jest, Vitest)</li>
            <li>Create integration tests</li>
            <li>Set up E2E testing (Playwright)</li>
            <li>Debug failing tests</li>
            <li>Improve test coverage</li>
          </ul>
        </div>

        <div className="card">
          <div className="card-icon">📦</div>
          <h2>Package Management</h2>
          <ul>
            <li>Install and update dependencies</li>
            <li>Configure npm/yarn/pnpm</li>
            <li>Create package.json scripts</li>
            <li>Manage monorepos</li>
            <li>Publish packages</li>
          </ul>
        </div>

        <div className="card">
          <div className="card-icon">🎨</div>
          <h2>UI/UX Development</h2>
          <ul>
            <li>Build responsive layouts</li>
            <li>Style with CSS/Tailwind/Styled Components</li>
            <li>Create animations</li>
            <li>Implement design systems</li>
            <li>Ensure accessibility</li>
          </ul>
        </div>

        <div className="card">
          <div className="card-icon">🔐</div>
          <h2>Security & Auth</h2>
          <ul>
            <li>Implement authentication systems</li>
            <li>Set up OAuth providers</li>
            <li>Configure JWT tokens</li>
            <li>Review security vulnerabilities</li>
            <li>Apply security best practices</li>
          </ul>
        </div>

        <div className="card">
          <div className="card-icon">📚</div>
          <h2>Documentation</h2>
          <ul>
            <li>Write technical documentation</li>
            <li>Generate API docs</li>
            <li>Create README files</li>
            <li>Document code with comments</li>
            <li>Build user guides</li>
          </ul>
        </div>

        <div className="card">
          <div className="card-icon">🤖</div>
          <h2>Automation</h2>
          <ul>
            <li>Create bash scripts</li>
            <li>Set up GitHub Actions</li>
            <li>Automate repetitive tasks</li>
            <li>Build CLI tools</li>
            <li>Configure build processes</li>
          </ul>
        </div>
      </div>

      <footer className="footer">
        <p>Built with Claude Code • Powered by Anthropic's Claude AI</p>
      </footer>
    </div>
  )
}
