@servers(['web' => ['-i ~/Documentos/deploy.pem -p 1409 alejandro@54.37.8.167']])

@setup
$path = '/var/www/html/Face_Your_Knuckles';
$branch = 'deploy';
@endsetup

@task('git', ['on' => 'web'])
    cd {{ $path }}
    git stash
    git fetch origin
    git rebase origin/{{ $branch }}
@endtask

@task('backend')
    cd {{ $path }}/backend
    composer install
@endtask

@task('frontend')
    cd {{ $path }}/frontend
    npm install
    npm run build
@endtask

@macro ('deploy')
    git
    backend
    frontend
@endmacro

