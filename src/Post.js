import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import CommentIcon from '@material-ui/icons/Comment'



const Post = ({ name,
    description,
    message,
    photoUrl,
    image }) => {
    return (
        <Card style={{ marginTop: 15 }}>
            <CardHeader
                avatar={<Avatar src={photoUrl} />}
                title={name}
                subheader={message}
                action={
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                }
            />
            <CardContent>
                <Typography variant='body2' color='textSecondary' component='p'>
                    {description}
                </Typography>
            </CardContent>
            <CardMedia component="img"
                height="194"
                image={image} />

            <CardActions disableSpacing>
                <IconButton>
                    <FavoriteIcon />
                </IconButton>
                <IconButton>
                    <CommentIcon />
                </IconButton>
                <IconButton>
                    <ShareIcon />
                </IconButton>
            </CardActions>


        </Card>
    )
}

export default Post;    
